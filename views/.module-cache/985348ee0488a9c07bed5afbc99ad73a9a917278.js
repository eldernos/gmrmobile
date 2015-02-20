var LoginView = React.createClass({displayName: "LoginView",
    render: function() {
        return (
            React.createElement("div", {id: "login"}, 
            	React.createElement("div", {id: "loginLogo"}, 
                	React.createElement("img", {src: "images/gmrlogo.png", border: "0"})
                ), 
                React.createElement("div", {class: "input_container"}, 
                React.createElement("br", null), 
                    React.createElement("input", {type: "text", id: "input", value: "email", onclick: "javascript: this.value = \"\""}), 
                    React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                ), 
                React.createElement("div", {class: "input_container"}, 
                React.createElement("br", null), 
                    React.createElement("input", {type: "text", id: "input", value: "password", onclick: "javascript: this.value = \"\""}), 
                    React.createElement("img", {src: "images/icon-lock.png", id: "input_img"})
                ), 
                
                    React.createElement("div", {class: "submitButton"}, 
                    React.createElement("input", {type: "button", value: "SUBMIT", onclick: "window.location = 'news.html'"})
                    )
            )
        );
    }
});