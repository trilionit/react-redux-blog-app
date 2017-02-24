import React, {Component} from 'react';
import TopLeft from './left/index.jsx';
import BlogPosts from './right/index.jsx';
class ViewPosts extends Component{
	render(){
		return(
			<div className="posts-container">
			  <TopLeft />
			  <BlogPosts />
			</div>
			)
	}
}
export default ViewPosts;