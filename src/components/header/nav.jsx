import React, {Component} from 'react';

class Nav extends Component{
	render(){
		return(
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Articles</a></li>
					<li><a href="#">About this Blog</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
			);
	}
}
export default Nav;