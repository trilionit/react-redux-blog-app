import React, {Component} from 'react';
import TopLeft from './left/index.jsx';
import BlogPosts from './viewPosts/index.jsx';
class ViewPosts extends Component{
	render(){
		
		return(
			<div className="posts-container">
			  <TopLeft />
			  <BlogPosts blogData={this.props.blogData} />
			</div>
			)
	}
}
export default ViewPosts;