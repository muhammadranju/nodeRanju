const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
   res.redirect("/");
});

userRouter.get("/profile", (req, res) => {
   res.status(200).render("pages/UserComponents/userProfile", {
      title: "Muhammad Ranju - Pikslide",
   });
});
userRouter.get("/setting", (req, res) => {
   res.status(200).render("pages/UserComponents/userSettings", {
      title: "Setting - Pikslide",
   });
});
userRouter.get("/upload", (req, res) => {
   res.status(200).render("pages/UserComponents/userProductUpload", {
      title: "Pikslide Submission - Pikslide",
   });
});
userRouter.get("/downloads", (req, res) => {
   res.status(200).render("pages/UserComponents/userMyDownloads", {
      title: "Downloads - Pikslide",
   });
});
userRouter.get("/chats", (req, res) => {
   res.status(200).render("pages/UserComponents/userChats", {
      title: "Chats - Pikslide",
   });
});
userRouter.get("/sales", (req, res) => {
   res.status(200).render("pages/UserComponents/userSales", {
      title: "Seles - Pikslide",
   });
});
userRouter.get("/email_setting", (req, res) => {
   res.status(200).render("pages/UserComponents/userEmail", {
      title: "Email Setting - Pikslide",
   });
});
userRouter.get("/billing", (req, res) => {
   res.status(200).render("pages/UserComponents/userBilling", {
      title: "Billing - Pikslide",
   });
});
userRouter.get("/mycart", (req, res) => {
   res.status(200).render("pages/UserComponents/userMycart", {
      title: "My Cart - Pikslide",
   });
});

module.exports = userRouter;
