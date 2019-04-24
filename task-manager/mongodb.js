// CRUD Operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Jane',
    //     age: 25
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Sid',
    //     age: 28
    // }, {
    //     name: 'Mukul',
    //     age: 28
    // }], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Task1',
    //     completed: true
    // },{
    //     description: 'Task2',
    //     completed: false
    // }], (error, result) => {
    //     if(error) {
    //         console.log('Unable to insert')
    //     }
    //     console.log(result.ops)
    // })

})