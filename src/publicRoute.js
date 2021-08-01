const express = require("express");
const publicRoute = express.Router();

publicRoute.get("/", (req, res) => {
   res.status(200).render("pages/IndexPage");
});

publicRoute.get("/logout", (req, res) => {
   res.redirect("/");
});
publicRoute.use((req, res, next) => {
   res.status(404).render("./pages/404Page/404PageNotFound");
});
module.exports = publicRoute;
