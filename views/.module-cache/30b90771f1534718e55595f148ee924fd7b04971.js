var DirectoryView = React.createClass({displayName: "DirectoryView",
	mixins: [GMR.Controllers.DirectoryController.prototype],
    render: function() {
        return (
        	React.createElement("div", {className: "leadCardContent"}, 
            	React.createElement("h1", null, "GMR DIRECTORY"), 
                React.createElement("p", null, React.createElement("strong", null, "Find Employees"), React.createElement("br", null), "Type a name or part of a name into any of the boxes below."), 
                React.createElement("div", {className: "formFields"}, 
                	
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "first name", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                    ), 
                    
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "last name", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                    ), 
                    
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "position", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                    ), 
                   
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "supervisor", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                    ), 
                    
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "office location", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-location.png", id: "input_img"})
                    ), 
                    
                    React.createElement("div", {className: "submitButton"}, 
                    React.createElement("input", {type: "button", value: "SUBMIT", onclick: "window.location = 'DirectoryList.html'"})
                    )
                )
			)
    
        
        );
    }
});