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
                        React.createElement("input", {className: "input", type: "text", id: "txtFirstName", placeholder: "first name", onChange: this.handleFirstNameChange}), 
                        React.createElement("img", {src: "images/icon-profile.png", className: "input_img"})
                    ), 
                    
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {className: "input", type: "text", id: "txtLastName", placeholder: "last name", onChange: this.handleLastNameChange}), 
                        React.createElement("img", {src: "images/icon-profile.png", className: "input_img"})
                    ), 
                    
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {className: "input", type: "text", id: "txtPosition", placeholder: "position", onChange: this.handlePositionChange}), 
                        React.createElement("img", {src: "images/icon-profile.png", className: "input_img"})
                    ), 
                   
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {className: "input", type: "text", id: "txtSupervisor", placeholder: "supervisor", onChange: this.handleSupervisorChange}), 
                        React.createElement("img", {src: "images/icon-profile.png", className: "input_img"})
                    ), 
                    
                    React.createElement("div", {className: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {className: "input", type: "text", id: "txtLocation", placeholder: "office location", onChange: this.handleLocationChange}), 
                        React.createElement("img", {src: "images/icon-location.png", className: "input_img"})
                    ), 
                    
                    React.createElement("div", {className: "submitButton"}, 
                    React.createElement("button", {type: "button", value: "SUBMIT", onclick: this.handleSubmit})
                    )
                )
			)
    
        
        );
    }
});