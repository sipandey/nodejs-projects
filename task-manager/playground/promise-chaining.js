require('../src/db/mongoose')
const User = require('../src/models/user')

//5ccdde4ff0d17a397cb3c775

// User.findByIdAndUpdate('5ccde02144b07d41600510e8', {
//     age: 1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = User.countDocuments({age: age})
    return count
}

updateAgeAndCount('5ccde02144b07d41600510e8', 2).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});