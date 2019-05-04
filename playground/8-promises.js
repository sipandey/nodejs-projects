const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7,4,1])
        reject('This is error!')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

