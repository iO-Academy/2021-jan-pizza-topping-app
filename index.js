const express = require('express');
const mongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const mongoUrl = 'mongodb://root:password@localhost:27017'
const mongoSetting = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoClient.Promise = Promise
app.get('/', function(request, response) {
    mongoClient.connect(mongoUrl, mongoSettings, (error, client ) => {
        console.log('Connected')
        const pizzaCollection
        })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})