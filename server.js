const express = require("express");
const port = process.env.PORT || 5050;

const app = express();

const posts = [
  { id: 1, post: "one" },
  { id: 2, post: "two" },
  { id: 3, post: "three" },
];

app.get("/", (req, res) => {
  res.json(posts);
});

app.listen(port, () => console.log(`server is listening on ${port}`));
