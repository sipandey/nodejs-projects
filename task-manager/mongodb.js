// CRUD Operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne( { name: 'Siddharth' }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 28}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 28}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5cbc9ac87e06eb0158bb6356")
    // }, {
    //     // $set: {
    //     //     name: 'Roger'
    //     // }
    //     $inc: {
    //         age: 3
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 28
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})