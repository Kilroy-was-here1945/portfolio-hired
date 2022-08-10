const express = require('express');
const cors = require('cors');
const path = require("path");


const app = express();





app.use(express.json());
app.use(cors());
const {getData, createProduct, deleteData} = require('./controller')

app.post('/api/data', createProduct)
app.get('/api/data', getData)
app.delete('/api/data/:id', deleteData)


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , '../home.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '../home.html' + "../index.css"));
  // res.sendFile(path.join(__dirname , '../index.css'));
  // res.sendFile(path.join(__dirname , 'controller.js'));
  // res.sendFile(path.join(__dirname , '../index.js'));
});
app.get('/parts', (req, res) => {
  res.sendFile(path.join(__dirname , '../parts.html'));
});
app.get('/pay', (req, res) => {
  res.sendFile(path.join(__dirname , '../pay.html'));
});
app.get('/pc', (req, res) => {
  res.sendFile(path.join(__dirname , '../pc.html'));
});
app.get('/phones', (req, res) => {
  res.sendFile(path.join(__dirname , '../phones.html'));
});
app.get('/processors', (req, res) => {
  res.sendFile(path.join(__dirname , '../processors.html'));
});
app.get('/sell', (req, res) => {
  res.sendFile(path.join(__dirname , '../sell.html'));
});
app.get('/vr', (req, res) => {
  res.sendFile(path.join(__dirname , '../vr.html'));
});
app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname , '../checkout.html'));
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
  });
