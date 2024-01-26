const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 5000; 

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
