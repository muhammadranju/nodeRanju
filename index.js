const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const publicRoute = require("./src/publicRoute");
const userRouter = require("./src/userRoute");
const postsRouter = require("./src/postsRoute");

app.use("/public", express.static("public"));
app.set("view engine", "ejs");

app.use("/users", userRouter);
app.use("/posts", postsRouter);
app.use("/", publicRoute);

app.listen(port, () => {
   console.log(`Server is runnig on ${port}`);
});
