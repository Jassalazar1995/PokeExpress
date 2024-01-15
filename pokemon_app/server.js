const express = require('express')
const pokemon = require('./models/pokemon')

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

app.get('/pokemon', (req,res) =>{
    res.render('Index', pokemon)
})

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})
