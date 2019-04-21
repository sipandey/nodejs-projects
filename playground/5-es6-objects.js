// Object property shorthand

const name = 'Siddharth'
const userAge = 28

const user = {
    name,
    age: userAge,
    location: 'Gurgaon'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 30,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const { label: productLabel, stock, rating = 5 } = product
// // console.log(label)
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)

transaction('order')