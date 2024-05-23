"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

//Count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections:: ${numConnection}`);
};

// Check overload connect

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // Example maximum number of connections base on number of cores

    const maxConnections = numCore * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log(`connection overload detected!`);
      //notify.send(...)
    }
  }, _SECONDS); // monitor every 5 second
};

module.exports = {
  countConnect,
  checkOverload,
};
