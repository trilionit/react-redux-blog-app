import React, {Component} from 'react';
// when connected change Comment Count to correspond with posts
class PostCount extends Component{
	render(){
		return(
			<div className="read-comment-placeholder">
				<h3>23</h3>
				<span>Posts</span>
				<div className="small-screens">23 Posts</div>
			</div>
			)
	}
}
export default PostCount;