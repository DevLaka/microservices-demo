const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { randomBytes } = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const { title } = req.body;
  const id = randomBytes(4).toString("hex");
  posts[id] = {
    id,
    title,
  };
  await axios
    .post("http://localhost:5010/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    })
    .catch((e) => console.log(e.message));
  res.status(201).send(posts[id]);
});

app.listen(5000, () => {
  console.log("Listening on 5000");
});
