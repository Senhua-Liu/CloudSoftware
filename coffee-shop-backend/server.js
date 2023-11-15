const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

let shoppingCart = [];

app.post('/add-to-cart', (req, res) => {
  const { coffee } = req.body;
  shoppingCart.push(coffee);
  res.json({ success: true, shoppingCart });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
