import React, {Component} from 'react';
import TopLeft from './left/index.jsx';
import BlogPosts from './viewPosts/index.jsx';
class ViewPosts extends Component{
	render(){
		console.log("initial props ",this.props.title);
		return(
			<div className="posts-container">
			  <TopLeft />
			  <BlogPosts title={this.props.title} />
			</div>
			)
	}
}
export default ViewPosts;