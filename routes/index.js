"use strict"
const models =require("../models");
const express = require("express");
const router = express.Router();

models.sequelize.sync();
//Home page //
router.get("/posts", function(req, res){
	models.Posts.findAll({
  order: [['id', 'DESC']]})
		  .then(function (data){
			console.log(data);
			res.json(data);
	})

});

router.post("/blog/posts", function(req, res){
	console.log("POSTS ROUTE");
	console.log(req.title);
	models.Posts.create({
	title:req.body.title,
	story:req.body.story,
	userId:1
	})
	let data = {
		title:req.body.title,
		story:req.body.story
		}
		res.json(data);
	// res.send("oops")

});


module.exports = router;