const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send({
        title: 'Final Space',
        name: 'Nabendu Biswas'
    })
})

app.get('/about', (req, res) => {
    res.send('Welcome to express')
})

app.get('/help', (req, res) => {
    res.send({
        helpText: 'This is some help text',
        title: 'Help',
        name: 'Nabendu Biswas'
    })
})

app.listen(8080, () => console.log(`Server is up on port 8080`))