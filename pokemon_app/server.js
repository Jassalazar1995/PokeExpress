const express = require('express');
const pokemons = require('./models/pokemon');

const app = express();
const PORT = 3000;

// Load and set up the JSX view engine for Express
const jsxEngine = require('jsx-view-engine');
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// Root route sends a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

// Route to display all pokemons using the Index view
app.get('/pokemons', (req, res) => {
    res.render('Index', { pokemons });
});

// Route to display a single pokemon using the Show view
app.get('/pokemons/:id', (req, res) => {
    res.render('Show', { pokemons, id: req.params.id });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
