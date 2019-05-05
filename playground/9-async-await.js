const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject('Cannot add negative')
            }
            resolve(a+b)
        }, 2000)
    })
}

const doWork = async () => {
    // throw new Error('Error!!')
    const sum = await add(1, 99)
    const sum2 = await add(sum, -1)
    return sum2
}

doWork().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});