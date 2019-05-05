const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

// add(1,2).then((sum) => {
//     console.log(sum)
// }).catch((err) => {
//     console.log(err)
// });

add(5,4).then((sum) => {
    console.log(sum)
    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2)
}).catch((err) => {
    console.log(err)
});

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([7,4,1])
//         reject('This is error!')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

