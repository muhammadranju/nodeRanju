const express = require("express");
const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
   res.status(200).render("pages/PostsPage/PostsProduct", {
      title: "Posts Product | Pikslide",
   });
});
postsRouter.get("/products", (req, res) => {
   res.status(200).render("pages/PostsPage/SingleProduct", {
      title: "New Social Media Poster | Pikslide",
   });
});

module.exports = postsRouter;
