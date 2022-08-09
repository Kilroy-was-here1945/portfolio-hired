const express = require('express');
const cors = require('cors');


const app = express();





app.use(express.json());
app.use(cors());
const {getData, createProduct, deleteData} = require('./controller')

app.post('/api/data', createProduct)
app.get('/api/data', getData)
app.delete('/api/data/:id', deleteData)


app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname , '../home.html'));
  res.send(`
  <h1>Welcome</h1>
  <h2>Scroll to learn more</h2>
`);

});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
  });
