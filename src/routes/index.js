"use strict";

const express = require("express");
const router = express.Router();

router.use('/v1/api', require('./access'))
// router.get("/", (req, res, next) => {
//   //   const srtCompress = "Hello con ga";
//   return res.status(200).json({
//     message: "Hello con ga",
//     // metadata: srtCompress.repeat(20000),
//   });
// });

module.exports = router;
