const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Siddharth'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us Page',
        name: 'Siddharth'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is the help page.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'forecast',
        location: 'location'
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});