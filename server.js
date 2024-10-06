const express = require("express");
const posts = require("./routes/posts");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
const notFound = require("./middleware/notFound");
const port = process.env.PORT || 5050;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(logger);

app.use("/api/posts", posts);

// error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server is listening on ${port}`));
