import React, {Component} from 'react';
// when connected change date to correspond with posts
class ListDate extends Component{
	render(){
		return(
			<div className="read-date-placeholder">
				<h3>Jan</h3>
				<span>17</span>
				<h4>2017</h4>
				<div className="small-screens">Jan 17 2017</div>
			</div>
			)
	}
}
export default ListDate;