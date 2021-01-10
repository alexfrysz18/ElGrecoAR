const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("homepage", {title:"Experiencia AR"});
});

module.exports = router;