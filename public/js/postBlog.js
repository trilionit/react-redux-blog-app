"use strict";
$(function(){
	function validateForm(title, story){
		if(title==""){
			return {
				responseID:"#response-title",
				responseTag:"#title",
				removeClassName:".input",
				addClassName:"error",
				message:"Empty Title"
			}
		}
		else if(story ==""){
			return {
				responseID:"#response-story",
				responseTag:"#story",
				removeClassName:"textarea",
				addClassName:"textarea-error",
				message:"Article is empty. Please type something"
				}
		}
	}
	$("#post-blog").submit(function(event){
		event.preventDefault();

		let form = event.target;
		let dataUrl = form.action;
		let headline = $(form).find("input[name=title]");
		let article = $(form).find("#story");
		let title = headline.val();
		let story = article.val();


	let responseData = validateForm(title, story);
		if(responseData){
			$(responseData.responseID).text(responseData.message);
			$(responseData.tag).addClass(responseData.addClassName);
	}
	else{

		let sendData={
			title:title,
			story:story
			}
		
	$.post(dataUrl, sendData, function(data) {
	
		console.log("DB Data: " + blog);
		var li = document.createElement('li');
		var h3 = document.createElement('h3');
		var span=document.createElement('span');
		var h3Text= data.title;
		var spanText= data.story;
		var formTitle=$(h3).text(h3Text);
		var formStory=$(span).text(spanText);
		$(li).append(formTitle)
			 .append(formStory)
			 .prependTo($("#story-board"));

	});
		
	}
});
});
