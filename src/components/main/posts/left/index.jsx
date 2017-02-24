import React, {Component} from 'react';
import ListDate from './date.jsx';
import PostCount from './postCount.jsx';
class TopLeft extends Component{
	render(){
		return(
			<div className="main-left">
				<div className="read-left">
					<ListDate />
					<PostCount />
				</div>
			</div>
			)
	}
}
export default TopLeft;