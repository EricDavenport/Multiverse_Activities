const express = require('express');
const {Restaurant, Menu} = require('./Models/index');
const server = express();
const port = 3000;

server.get('/flipcoin', (req, res) => {
    const random = (Math.floor(Math.random() * 2) === 0)
    // res.send(random)
    console.log(random)

    res.send(random ? '<p>Heads</p>' : '<p>Tails<p/>')

})

server.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll() 
    res.json({restaurants})
})

server.listen(port, () => {
    console.log(`Server is listening to port: ${port}`);
})


