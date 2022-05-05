const express = require("express");

const app = express();
app.use(express.json());

const posts = {};

app.post("/events", (req, res) => {
  const { event } = req.body;
  axios.post("http://localhost:5000/event", event);
  axios.post("http://localhost:5001/event", event);
  axios.post("http://localhost:5002/event", event);
  res.send({ status: "OK" });
});

app.listen(5010, () => {
  console.log("Listening on 5010");
});
