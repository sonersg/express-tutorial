const router = require("express").Router();

let posts = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" },
];

// get all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// get single post
router.get("/:id", (req, res) => {
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

// new post
router.post("/", (req, res) => {
  //   console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title)
    return res.status(400).json({ message: "Please include a title" });

  posts.push(newPost);

  res.status(201).json(posts);
});

// update post
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id of ${id} couldn't found` });
  }

  post.title = req.body.title;

  res.status(200).json(posts);
});

// delete post
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id of ${id} couldn't found` });
  }

  posts = posts.filter((post) => post.id !== id);

  res.status(200).json(posts);
});

module.exports = router;
