const express = require("express");
const port = process.env.PORT || 5050;

const app = express();

const posts = [
  { id: 1, post: "one" },
  { id: 2, post: "two" },
  { id: 3, post: "three" },
];

// get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// get single post
app.get("/api/posts/:id", (req, res) => {
  //   console.log(req.params.id);
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res
      .status(404)
      .json({ message: `A post with the id of ${id} couldn't found` });
  } else {
    res.status(200).json(post);
  }
});

app.listen(port, () => console.log(`server is listening on ${port}`));
