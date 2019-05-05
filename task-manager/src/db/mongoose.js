const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: 'Siddharth    ',
//     email: 'SIPANDEY6@GMAIL.COM',
//     password: 'mynewpass'
// })

// me.save().then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });


// const newTask = new Task({
//     description: 'Learn mongoose.js'
// })

// newTask.save().then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });