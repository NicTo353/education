const { mongoUrl, port } = require("./config");
const express = require("express");
const mongoose = require("mongoose");
const teacherRouter = require("./routers/teacherRouter");
const groupRouter = require("./routers/groupRouter");
const studentRouter = require("./routers/studentRouter");
const subjectRouter = require("./routers/subjectRouter");
const scheduleRouter = require("./routers/scheduleRouter");
const authRouter = require("./routers/authRouter");

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/group", groupRouter);
app.use("/api/student", studentRouter);
app.use("/api/subject", subjectRouter);
app.use("/api/schedule", scheduleRouter);

function start() {
  try {
    mongoose.connect(mongoUrl);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
