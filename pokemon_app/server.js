const express = require('express')
const pokemons = require('./models/pokemon')



const app = express()

const PORT = 3000

//load our engine
const jsxEngine = require('jsx-view-engine')

// setup our engine
app.set('view engine', 'jsx')
app.engine('jsx',jsxEngine())

app.get('/',(req,res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemons', (req,res) => {
    res.render('Index',{ pokemons })
})

app.get('/st', (req,res) => {
    res.send(pokemons[0])
})

//Setting up show route
app.get('/pokemons/:id', (req,res) => {
    res.render('Show', {id: req.params.id})
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
