// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const myDB = db.db('TodoApp');

    myDB.collection('Users').deleteMany({name: 'Ricardo'}).then((result) => {
        console.log(result);
    });

    // myDB.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    myDB.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a6c887dc40d911ce8605018')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});