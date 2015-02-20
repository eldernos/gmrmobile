﻿var LoginView = React.createClass({displayName: "LoginView",
	mixins: [GMR.Controllers.LoginController.prototype],
    render: function() {

        return (
            React.createElement("form", {id: "login", onSubmit: this.handleSubmit}, 
            	React.createElement("div", {id: "loginLogo"}, 
                	React.createElement("img", {src: "images/gmrlogo.png", border: "0"})
                ), 
                React.createElement("div", {className: "input_container"}, 
                React.createElement("br", null), 
                    React.createElement("input", {type: "text", className: "input", id: "txtEmail", placeholder: "email", onChange: this.handleEmailChange}), 
                    React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                ), 
                React.createElement("div", {className: "input_container"}, 
                React.createElement("br", null), 
                    React.createElement("input", {type: "password", className: "input", id: "txtPassword", name: "password", placeholder: "password", onChange: this.handlePasswordChange}), 
                    React.createElement("img", {src: "images/icon-lock.png", id: "input_img"})
                ), 
                 
                    React.createElement("div", {className: "submitButton"}, 
                    React.createElement("button", {type: "button", onClick: this.handleSubmit}, "SUBMIT")
                    )
            )
        );
    }
});