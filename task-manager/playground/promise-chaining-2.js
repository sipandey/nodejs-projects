require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5cceeddd825219381c52a2da').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5ccdda0afdb2b82bd0c114e1').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
});