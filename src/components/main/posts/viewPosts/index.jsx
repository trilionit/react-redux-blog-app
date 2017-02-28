import React, {Component} from 'react';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
// this is where my post magic will appear
class BlogPosts extends Component{

	render(){
	let newPosts = this.props.blogData;
	let listItems = newPosts.map((ls)=>
		<li key={ls.id}>
			<h3>{ls.title}</h3>
			<span>{ls.story} edit</span>
		</li>);
		console.log("Rendered Props ",this.props.blogData);
		return(
		<div className="read-right" id="read-text">
			<img src="images/place-holder.jpg"  alt="place-holder" />
			<div id="black-board">
				<ul id="story-board">
					{listItems}
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