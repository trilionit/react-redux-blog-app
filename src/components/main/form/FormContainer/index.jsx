import React, {Component} from 'react';
// this is where my post magic will appear
class FormContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			loading: false
		}
	}

	submitForm(event){
		event.preventDefault();
			let blogPost ={
				title:this.input.value,
				story:this.textarea.value,
				
			}
			
		//send to db
		this.setState({loading: true})
			$.post("/blog/posts", blogPost, function(data){
				this.props.receivePost(data)
				this.setState({loading: false})
			}.bind(this));
			
	}


	render(){

		return(
		<div className="read-right" id="read-text">
			{this.state.loading ? 
				<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif" />
				: 
				<form onSubmit={this.submitForm.bind(this)} id="post-blog">
				<div className="blog-post">	
					<span id="response-title" className="response"></span>	
					<input ref={(input) => this.input = input} type="text"  className="input" placeholder="Blog title Goes Here..." />
					<span id="response-story" className="response"></span>
					<textarea ref={(textarea) => this.textarea = textarea} id="story" className="textarea" placeholder="Enter Your Story Here"></textarea>
					<input type="submit" name="submit" value="Post" />
				</div>
				</form>}
		</div>

			)
	}
}
export default FormContainer;