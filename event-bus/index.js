const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const events = [];

const posts = {};

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  axios
    .post("http://localhost:5000/events", event)
    .catch((e) => console.log(e.message));
  axios
    .post("http://localhost:5001/events", event)
    .catch((e) => console.log(e.message));
  axios
    .post("http://localhost:5002/events", event)
    .catch((e) => console.log(e.message));
  axios
    .post("http://localhost:5003/events", event)
    .catch((e) => console.log(e.message));
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(5010, () => {
  console.log("Listening on 5010");
});
