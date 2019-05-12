const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: 'Siddharth    ',
//     email: 'something@GMAIL.COM',
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