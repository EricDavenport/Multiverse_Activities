const express = require('express');
const seed = require('./seed')
const {Restaurant, Menu} = require('./Models/index');
const app = express();
const PORT = 3000;


seed()

app.use(express.json())

app.get('/flipcoin', (req, res) => {
    const random = (Math.floor(Math.random() * 2) === 0)
    // res.send(random)
    console.log(random)

    res.send(random ? '<p>Heads</p>' : '<p>Tails<p/>')

})

app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll() 
    res.json({restaurants})
})

app.listen(PORT, () => {
    console.log(`Server is listening to port: ${PORT}`);
})


