var LoginView = React.createClass({displayName: "LoginView",
	
	handleSubmit: function(e) {
		e.preventDefault();
		GMR.Okta.SuccessCallback = function(d) {
			console.dir(d);
		};
		GMR.Okta.ErrorCallback = function(e) {
			console.dir(e);
		};
		GMR.Okta.Authenticate($('#txtEmail').attr('value'), $('#txtPassword').attr('value'));
	},
    render: function() {
        return (
            React.createElement("form", {id: "login", onSubmit: this.handleSubmit}, 
            	React.createElement("div", {id: "loginLogo"}, 
                	React.createElement("img", {src: "images/gmrlogo.png", border: "0"})
                ), 
                React.createElement("div", {class: "input_container"}, 
                React.createElement("br", null), 
                    React.createElement("input", {type: "text", id: "txtEmail", value: "email", onclick: "javascript: this.value = \"\""}), 
                    React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                ), 
                React.createElement("div", {class: "input_container"}, 
                React.createElement("br", null), 
                    React.createElement("input", {type: "text", id: "txtPassword", value: "password", onclick: "javascript: this.value = \"\""}), 
                    React.createElement("img", {src: "images/icon-lock.png", id: "input_img"})
                ), 
                
                    React.createElement("div", {class: "submitButton"}, 
                    React.createElement("input", {type: "button", value: "SUBMIT", onclick: "window.location = 'news.html'"})
                    )
            )
        );
    }
});