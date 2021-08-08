const express = require("express");
const publicRoute = express.Router();

publicRoute.get("/", (req, res) => {
   let imgs = [
      { img: "../public/img/marketplace/products/01.jpg", name: "Md Ranju" },
      { img: "../public/img/marketplace/products/02.jpg", name: "Md Amin" },
      { img: "../public/img/marketplace/products/03.jpg", name: "Pikslide" },
      { img: "../public/img/marketplace/products/04.jpg", name: "Md Ranju" },
      { img: "../public/img/marketplace/products/05.jpg", name: "Pikslide" },
      { img: "../public/img/marketplace/products/06.jpg", name: "Md Ranju" },
      { img: "../public/img/marketplace/products/07.jpg", name: "Amin" },
      {
         img: "../public/img/marketplace/products/08.jpg",
         name: "Muhammad",
      },
   ];
   res.status(200).render("pages/IndexPage", {
      title: "Unlimited Templates, Themes and More - Pikslide",
      imgs,
   });
});

publicRoute.get("/logout", (req, res) => {
   res.redirect("/");
});
publicRoute.use((req, res, next) => {
   res.status(404).render("./pages/404Page/404PageNotFound", {
      title: "404 page not found - Pikslide",
   });
});
module.exports = publicRoute;
