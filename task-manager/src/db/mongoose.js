const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be postive')
            }
        }
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
})

const me = new User({
    name: 'Siddharth    ',
    email: 'SIPANDEY6@GMAIL.COM'
})

me.save().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const newTask = new Task({
//     description: 'Learn Node.js',
//     completed: false
// })

// newTask.save().then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });