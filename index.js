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

  app.get("/news", (req, res) => {
    res.send(news);
  });

  app.get("/news-categories", (req, res) => {
    res.send(categories);
  });

  app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find((n) => n._id === id);
    res.send(selectedNews);
  });
  
  app.listen(port, () => {
    console.log(`Course app listening on port ${port}`);
  })