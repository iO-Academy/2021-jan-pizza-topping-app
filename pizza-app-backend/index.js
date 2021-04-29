const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const objectId = require('mongodb').ObjectId;

const app = express();
const port = 3001;

const mongoUrl = 'mongodb://root:password@localhost:27017'
const mongoSetting = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoClient.Promise = Promise;
app.use(cors())

app.get('/cors', function(request, response) {
    console.info('GET cors');
    response.json;
})

app.get('/', function(request, response) {
    mongoClient.connect(mongoUrl, mongoSetting, async (error, client ) => {
        console.log('Connected')
        const pizzaCollection = client.db('pizza-app').collection('pizza-toppings')
        const individualPizza = await pizzaCollection.find({}).toArray()

        response.send({
//            success: true,
//            message: 'Successfully retrieved all the randomised pizzas',
              arrayOfPizzas: individualPizza
        })
    })
})


app.put('/:categoriesid', function(request, response) {    // the id is a string not an object - it will not work
    let categoryId = parseInt(request.params.categoriesid);
mongoClient.connect(mongoUrl, mongoSetting, async (error, client) => {
        let remindersCollection = client.db('pizza-app').collection('pizza-toppings')
       let foo = await remindersCollection.updateOne(
            { categoriesid: categoryId },
            { $inc: { votes: 1 } }
            )
            response.send({
            success: true,
            message: `Successfully marked task as completed`,
            statusCode: 200
        })
    })
    })


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


