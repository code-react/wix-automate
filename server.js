const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./config/db");

const jobsRouter = require("./routes/jobsRoute");


const PORT = process.env.PORT || 3000;

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

app.use("/", jobsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
