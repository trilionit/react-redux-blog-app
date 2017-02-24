"use strict"
const models =require("../models");
const express = require("express");
const router = express.Router();

models.sequelize.sync();
//Form Submit //
router.get("/blog/posts", function(req, res){
	console.log("POSTS ROUTE");

	// models.Posts.create({
	// 	title:req.body.title,
	// 	story:req.body.story,
	// 	userId:1
	// })
	// let data = {
	// 		title:req.body.title,
	// 		story:req.body.story
	// 	}
	// 	res.json(data);

	res.send("oops")

});
module.exports = router;