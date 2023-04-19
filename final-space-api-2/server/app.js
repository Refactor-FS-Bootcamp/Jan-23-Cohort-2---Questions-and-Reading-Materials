const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const pubDir = path.join(__dirname, './public')
const viewsDir = path.join(__dirname, './templates/views')
const partialDir = path.join(__dirname, './templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialDir)

app.use(express.static(pubDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Final Space',
        name: 'Nabendu Biswas'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Nabendu Biswas'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some help text',
        title: 'Help',
        name: 'Nabendu Biswas'
    })
})

app.listen(8080, () => console.log(`Server is up on port 8080`))