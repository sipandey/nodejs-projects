const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'Siddharth',
//     age: 28
// })

// me.save().then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const newTask = new Task({
    description: 'Learn Node.js',
    completed: false
})

newTask.save().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});