import React, {Component} from 'react';
import Nav from './nav.jsx';
class Header extends Component{
	render(){
		return(
		<header>
			<div className="container">
			<div className="logo"><img src="images/logo.png" width="110" alt="logo" /></div>
				<Nav />
			</div>

		</header>
			)
	}
}
export default Header;