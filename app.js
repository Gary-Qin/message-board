const express = require("express");
const app = express();
const path = require("node:path");
const { indexRouter } = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", messageRouter);

const HOST = 4000;
app.listen(HOST, () => {
  console.log(`server running on port ${HOST}`);
});
