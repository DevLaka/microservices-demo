const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  res.send(commentsByPostId[id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const commentId = randomBytes(4).toString("hex");
  const comments = commentsByPostId[id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[id] = comments;
  res.status(201).send(comments);
});

app.listen(6000, () => {
  console.log("Listening on 6000");
});
