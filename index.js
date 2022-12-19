const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

// data loading
const categories = require("./data/Categories.json");
const news = require("./data/Courses.json");

app.get('/', (req, res) => {
    res.send('Course api running');
  });
  
  app.listen(port, () => {
    console.log(`Course app listening on port ${port}`);
  })