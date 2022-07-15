const express = require('express');
const cors = require('cors');


const app = express();





app.use(express.json());
app.use(cors());
const {getData, createProduct, deleteData} = require('./controller')

app.post('/api/data', createProduct)
app.get('/api/data', getData)
app.delete('/api/data/:id', deleteData)






app.listen(5500, () => {console.log('Listening on port 5500')})