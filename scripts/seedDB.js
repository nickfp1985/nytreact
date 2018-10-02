const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "Article Title 1",
    date: new Date(Date.now()),
    url: "https://www.nytimes.com"
  },
  {
    title: "Article Title 2",
    date: new Date(Date.now()),
    url: "https://www.nytimes.com"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
