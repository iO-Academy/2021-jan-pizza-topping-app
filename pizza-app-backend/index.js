const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const cors = require('cors')

const app = express();
const port = 3000;

const mongoUrl = 'mongodb://root:password@localhost:27017'
const mongoSetting = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoClient.Promise = Promise;

app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     next();
// });

app.get('/cors', function(request, response) {
    console.info('GET cors');
    response.json;
})

app.get('/', function(request, response) {
    mongoClient.connect(mongoUrl, mongoSetting, async (error, client ) => {
        console.log('Connected')
        const pizzaCollection = client.db('pizza-app').collection('pizza-toppings')
        const individualPizza = await pizzaCollection.find({}).toArray()
        // const results = [];
        //     for (let i = 0; i < individualPizza.length - 1; i++) {
        //       for (let j = i + 1; j < individualPizza.length; j++) {
        //         results.push(`${individualPizza[i]} ${individualPizza[j]}`);
        //       }
        //     }

        response.send({
//            success: true,
//            message: 'Successfully retrieved all the randomised pizzas',
           arrayOfPizzas: individualPizza
            // arrayOfShuffledPizzas: results
        })
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


