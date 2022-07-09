const express = require('express');
const cors = require('cors');

const app = express();
// const ctrl = require('./controller')


app.use(express.json());
app.use(cors());
const {getData} = require('./controller')

// const {}


app.get('/api/data', getData)





app.listen(5500, () => {console.log('Listening on port 5500')})