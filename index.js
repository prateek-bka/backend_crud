const express = require("express");
const { connection } = require("./db");
const { auth } = require("./middleware/auth.middleware");
const { noteRouter } = require("./routes/note.routes");
const { userrouter } = require("./routes/user.routes");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// const port = process.env.PORT || 7580;

app.use("/users", userrouter);

app.use("/notes", auth, noteRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Mongodb Connected");
  } catch (error) {}
  console.log(`Server running at port: ${port}`);
});
