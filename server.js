require("dotenv").config();

const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewears/errors/customErrorHandler");
const routers = require("./routers");
const path = require("path");

// Enviroment Variables
dotenv.config({
  path: "./config/env/config.env",
});

//MongoDb Connection

connectDatabase();
const app = express();
// Express - Body Middleware
app.use(express.json());

const PORT = process.env.PORT;

// Routers Middleware

app.use("/api", routers);
// Error Handler

app.use(customErrorHandler);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`App started on ${PORT}: ${process.env.NODE_ENV}`);
});
