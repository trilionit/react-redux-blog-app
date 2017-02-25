import React, {Component} from 'react';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
// this is where my post magic will appear
class BlogPosts extends Component{
	// constructor(){
	// 	super();
	// 	this.state={
	// 		title:"Initial Title",
	// 		story:"initial Story Line goes here"
	// 	}
	// 	//this.createPostItems=this.createPostItems.bind(this);
	// }
	// createPostItems(){
	// 	let blogPost=this.props.blogPost
	// 	this.setState({blogPost});
	// 	console.log("Props for ")
	// 	console.log(blogPost);
	// 	}
	// 	return this.props.blogPost.map((blog) =>{
	
	// 		return(
	// 			<li key={blog.title}>
	// 				<h3>{blog.title}</h3>
	// 				<span>{blog.story}</span>
	// 			</li>
	// 			);
	// 	});
	
	render(){
		console.log("Rendered Props ",this.props.title);
		return(
		<div className="read-right" id="read-text">
			<img src="images/place-holder.jpg"  alt="place-holder" />
			<div id="black-board">
				<ul id="story-board">
					<li>
						
					</li>
				</ul>
			</div>
		</div>

			)
	}
}
// function mapStateToProps(state){
// 	return{
// 		posts:state.posts
// 	}
// }
// export default connect(mapStateToProps)(BlogPosts);
export default BlogPosts;