var LoginView = React.createClass({displayName: "LoginView",
	handleEmailChange: function(e) {
		this.setState({email: e.target.value});
	},
	handlePasswordChange: function(e) {
		this.setState({password: e.target.value});

	},
	handleSubmit: function() {
		GMR.Okta.SuccessCallback = function(d) {
			React.render(React.createElement(DirectoryView, null), document.getElementById('content'));
		};
		GMR.Okta.ErrorCallback = function(e) {
			alert('error authenticating');
		};
		GMR.Okta.Authenticate(this.state.email, this.state.password);
	},
    render: function() {

        return (
            React.createElement("form", {id: "login", onSubmit: this.handleSubmit}, 
            	React.createElement("div", {id: "loginLogo"}, 
                	React.createElement("img", {src: "images/gmrlogo.png", border: "0"})
                ), 
                React.createElement("div", {class: "input_container"}, 
                React.createElement("br", null), 
                    React.createElement("input", {type: "text", id: "txtEmail", placeholder: "email", onChange: this.handleEmailChange}), 
                    React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                ), 
                React.createElement("div", {class: "input_container"}, 
                React.createElement("br", null), 
                    React.createElement("input", {type: "text", id: "txtPassword", placeholder: "password", onChange: this.handlePasswordChange}), 
                    React.createElement("img", {src: "images/icon-lock.png", id: "input_img"})
                ), 
                
                    React.createElement("div", {class: "submitButton"}, 
                    React.createElement("button", {type: "button", onClick: this.handleSubmit}, "SUBMIT")
                    )
            )
        );
    }
});