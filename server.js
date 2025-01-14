import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock database
let database = [];

// Endpoint to save data
app.post('/api/save-data', (req, res) => {
  const { name, email, phone, product } = req.body;
  if (!name || !email || !phone || !product) {
    return res.status(400).send('All fields are required');
  }
  database.push({ name, email, phone, product });
  console.log('Data saved:', database);
  res.status(200).send('Data saved successfully');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
