const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  res.send(commentsByPostId[id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const commentId = randomBytes(4).toString("hex");
  const comments = commentsByPostId[id] || [];
  comments.push({ id: commentId, content, status: "pending" });
  commentsByPostId[id] = comments;
  await axios
    .post("http://localhost:5010/events", {
      type: "CommentCreated",
      data: {
        id: commentId,
        content,
        postId: id,
        status: "pending",
      },
    })
    .catch((e) => console.log(e.message));
  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  console.log("Event Received: ", req.body.type);
});

app.listen(5001, () => {
  console.log("Listening on 5001");
});
