import React, {Component} from 'react';
import TitleBox from './left/index.jsx';
import FormContainer from './FormContainer/index.jsx';
class FormComponent extends Component{
	render(){
		return(
			<div className="posts-container">
			  <TitleBox />
			  <FormContainer receivePost={this.props.receivePost} />
			</div>
			)
	}
}
export default FormComponent;