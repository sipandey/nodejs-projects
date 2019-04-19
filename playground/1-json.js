const fs = require('fs')
// const book = {
//     title: 'Game of Thrones',
//     author: 'George R. Martin'
// }

// // Takes object or array and returns json string
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// console.log(bookJSON)

// // Takes json string and gives back object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Siddharth'
data.age = 28

const writeData = JSON.stringify(data)
fs.writeFileSync('1-json.json', writeData)