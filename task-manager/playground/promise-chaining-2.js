require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5cceeddd825219381c52a2da').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})