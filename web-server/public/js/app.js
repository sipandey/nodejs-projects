console.log('Client side js file is loaded')

fetch('http://localhost:3000/weather?address=Gurgaon').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        }
        else {
            console.log(data.location, data.forecast)
        }
    })
})