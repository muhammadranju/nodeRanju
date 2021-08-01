const express = require("express");
const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
   res.status(200).render("pages/PostsPage/PostsProduct");
});
postsRouter.get("/products", (req, res) => {
   res.status(200).render("pages/PostsPage/SingleProductViewPage");
});

module.exports = postsRouter;
