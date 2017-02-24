import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// this is where my post magic will appear
class BlogPosts extends Component{
	createPostItems(){
		//return this.props.posts.map((blog) =>{
			// return(
			// 	<li key={blog.id}>
			// 		<h3>{blog.title}</h3>
			// 		<span>{blog.story}</span>
			// 	</li>
			// 	);
			return(
				<li>//this.props.blogPost.title
				</li>
				)
		//});
	}
	render(){
		return(
		<div className="read-right" id="read-text">
			<img src="images/place-holder.jpg"  alt="place-holder" />
			<div id="black-board">
				<ul id="story-board">
					{this.createPostItems()}
				</ul>
			</div>
		</div>

			)
	}
}
function mapStateToProps(state){
	return{
		posts:state.posts
	}
}
export default connect(mapStateToProps)(BlogPosts);