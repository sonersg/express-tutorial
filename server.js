const express = require("express");
const posts = require("./routes/posts");
const port = process.env.PORT || 5050;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

app.listen(port, () => console.log(`server is listening on ${port}`));
