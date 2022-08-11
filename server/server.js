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
  res.sendFile(path.join(__dirname, '../home.html'));
});
app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../home.html'));
});
app.get('axios', (req, res) => {
  res.sendFile(path.join(__dirname, '/axios'));
});
app.get('../index.css', (res,req) => {
  res.sendFile(path.join(__dirname, '../index.css'));
});
app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.js'));
});
app.get('/controller.js', (res,req) => {
  res.sendFile(path.join(__dirname, './controller.js'));
});
app.get('/db.json', (res,req) => {
  res.sendFile(path.join(__dirname, './db.json'));
});
app.get('/parts.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../parts.html'));
});
app.get('/pay.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../pay.html'));
});
app.get('/pc.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../pc.html'));
});
app.get('/phones.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../phones.html'));
});
app.get('/processors.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../processors.html'));
});
app.get('/sell.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../sell.html'));
});
app.get('/vr.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../vr.html'));
});
app.get('/checkout.html', (req, res) => {
  res.sendFile(path.join(__dirname , '../checkout.html'));
});
app.use(express.static("."));


const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
  });
