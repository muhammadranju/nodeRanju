const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
   res.redirect("/");
});

userRouter.get("/profile", (req, res) => {
   res.status(200).render("pages/UserComponents/userProfile");
});
userRouter.get("/setting", (req, res) => {
   res.status(200).render("pages/UserComponents/userSettings");
});
userRouter.get("/upload", (req, res) => {
   res.status(200).render("pages/UserComponents/userProductUpload");
});
userRouter.get("/downloads", (req, res) => {
   res.status(200).render("pages/UserComponents/userMyDownloads");
});
userRouter.get("/chats", (req, res) => {
   res.status(200).render("pages/UserComponents/userChats");
});
userRouter.get("/sales", (req, res) => {
   res.status(200).render("pages/UserComponents/userSales");
});
userRouter.get("/email_setting", (req, res) => {
   res.status(200).render("pages/UserComponents/userEmail");
});
userRouter.get("/billing", (req, res) => {
   res.status(200).render("pages/UserComponents/userBilling");
});
userRouter.get("/mycart", (req, res) => {
   res.status(200).render("pages/UserComponents/userMycart");
});

module.exports = userRouter;
