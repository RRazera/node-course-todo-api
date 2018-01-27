// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const myDB = db.db('TodoApp');

    // myDB.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a6cefa69109c516608eaad5')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    myDB.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a6c8876c40d911ce8605017')
    }, {
        $set: {
            name: 'Ricardo'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});