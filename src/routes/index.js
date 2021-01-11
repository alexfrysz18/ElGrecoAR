const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("homepage", {title:"Experiencia AR"});
});

router.get("/test", (req, res)=>{
  res.render("testing", {title:"Testing"});
});

module.exports = router;