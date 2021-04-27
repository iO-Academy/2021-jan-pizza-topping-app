const express = require('express');
const mongoClient = require('mongodb').MongoClient;

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
        const pizzaCollection = client.db('pizza-app').collection('pizza-toppings')
        const individualPizza = await pizzaCollection.find({}).toArray()
        const results = [];
            for (let i = 0; i < individualPizza.length - 1; i++) {
              for (let j = i + 1; j < individualPizza.length; j++) {
                results.push(`${individualPizza[i]} ${individualPizza[j]}`);
              }
            }

        response.send({
//            success: true,
//            message: 'Successfully retrieved all the randomised pizzas',
//            arrayOfPizzas: individualPizza
            arrayOfShuffledPizzas: results
        })
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


