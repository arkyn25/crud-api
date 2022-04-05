const express = require('express');

const app = express();

app.get('/',(_req, res) => {
  res.send('Hello World');
}); 


const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT} !`));