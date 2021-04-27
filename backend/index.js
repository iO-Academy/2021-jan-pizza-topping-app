const express = require('express');
const mongoClient = require('mongodb').MongoClient;
// const objectId = require('mongodb').ObjectID;
// const shuffle = require('shuffle-array');

const app = express();
const port = 3001;

const mongoUrl = 'mongodb://root:password@localhost:27017'
const mongoSetting = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoClient.Promise = Promise;

app.get('/', function(request, response) {
    mongoClient.connect(mongoUrl, mongoSetting, async (error, client ) => {
        console.log('Connected')
        const pizzaCollection = client.db('pizza-app').collection('pizza-toppings');
        const individualPizza = await pizzaCollection.find({}).toArray()

        let individualPizzaArray = [];
        for (let i = 0; i < individualPizza.length - 1; i++) {
            for (let j = i + 1; j < individualPizza.length; j++) {
                individualPizzaArray.push(`${individualPizza[i]} ${individualPizza[j]}`);
            }
        }
        response.send({
            success: true,
            message: 'Successfully retrieved all the individual pizzas',
            // data: individualPizza,
            randomCombo: individualPizzaArray
        })
    })
})


//remove when the app is finished
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

