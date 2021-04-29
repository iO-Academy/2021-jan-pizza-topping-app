const express = require('express');
const mongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

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

        response.send({
            success: true,
            message: 'Successfully retrieved all the individual pizzas',
            data: individualPizza
        })
    })
})


app.put('/toppings/:id', function(request, response){
    toppingName = request.params.toppingsname
    toppingsname.forEach((topping) => {
        if(topping.toppingsname == toppingName) {
            topping.votes = +1
        }

    })

    response.send({
        sucess: true,
        message: 'pizza topping has a vote',
        statusCode: 200,
        data: []
    })

})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


//export async function getAllPizzas() {
//
//    const response = await fetch('/');
//    return await response.json();
//}
