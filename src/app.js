const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");

const app = express();

// init middleware
app.use(morgan("dev"));
// app.use(morgan("combined"));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.get("/", (req, res, next) => {
  const srtCompress = "Hello con ga";
  return res.status(200).json({
    message: "Hello con ga",
    metadata: srtCompress.repeat(20000),
  });
});

// handle error

module.exports = app;
