const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const posts = {};

app.post("/events", (req, res) => {
  console.log("Event Received: ", req.body);
});

app.listen(5003, () => {
  console.log("Listening on 5003");
});
