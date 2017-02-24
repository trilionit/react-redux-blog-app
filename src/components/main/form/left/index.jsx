import React, {Component} from 'react';
// when connected change Comment Count to correspond with posts
class TitleBox extends Component{
	render(){
		return(
		<div className="main-left">
			<div className="read-left">
				<div className="read-date-placeholder">
					<h3>Post</h3>
					<span>Blog</span>
					<div className="small-screens">Post Blog</div>
				</div>
				<div className="read-comment-placeholder">
					<h3></h3>
					<span></span>
					<div className="small-screens"></div>
				</div>
			</div>
		</div>
			)
	}
}
export default TitleBox;