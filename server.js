const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./controllers/users");
const profilesRouter = require("./controllers/profiles");
const flatRouter = require("./controllers/flat");
const morgan = require("morgan");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
app.use(cors());
app.use(express.json());

// Routes go here
app.use(morgan("dev"));
app.use("/users", usersRouter);
app.use("/profiles", profilesRouter);
app.use("/flat", flatRouter);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
