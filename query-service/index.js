const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {});

app.post("/events", (req, res) => {
  console.log("Event Received: ", req.body.type);
});

app.listen(5002, () => {
  console.log("Listening on 5002");
});
