const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString("hex");
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
