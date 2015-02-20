var DirectoryView = React.createClass({displayName: "DirectoryView",
    render: function() {
        return (
           React.createElement("div", {id: "container"}, 
           React.createElement("div", {id: "nav"}, 
        	React.createElement("div", {id: "navProfile"}, 
                React.createElement("div", {id: "profile"}, 
                    React.createElement("div", {id: "profileImage"})
                )
            ), 
            React.createElement("ul", null, 
                React.createElement("li", null, React.createElement("a", {href: "directory.html"}, "GMR DIRECTORY")), 
                React.createElement("li", null, React.createElement("a", {href: "locations.html"}, "OFFICE LOCATIONS")), 
                React.createElement("li", null, React.createElement("a", {href: "news.html"}, "RECENT NEWS")), 
                React.createElement("li", null, React.createElement("a", {href: "http://www.gmrmarketing.com"}, "GMRMARKETING.COM"))

            )
        ), 
        React.createElement("div", {id: "logo"}, React.createElement("a", {href: "index.html"}, React.createElement("img", {src: "images/gmrlogo.png", border: "0"}))), 
        React.createElement("div", {id: "header"}, 
            React.createElement("a", {href: "#", id: "menu"}, React.createElement("img", {src: "images/menu.png"}))
        ), 
        React.createElement("div", {id: "content"}, 
        	React.createElement("div", {class: "leadCardContent"}, 
            	React.createElement("h1", null, "GMR DIRECTORY"), 
                React.createElement("p", null, React.createElement("strong", null, "Find Employees"), React.createElement("br", null), "Type a name or part of a name into any of the boxes below."), 
                React.createElement("div", {class: "formFields"}, 
                	
                    React.createElement("div", {class: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "first name", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                    ), 
                    
                    React.createElement("div", {class: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "last name", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                    ), 
                    
                    React.createElement("div", {class: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "position", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                    ), 
                   
                    React.createElement("div", {class: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "supervisor", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-profile.png", id: "input_img"})
                    ), 
                    
                    React.createElement("div", {class: "input_container"}, 
                    React.createElement("br", null), 
                        React.createElement("input", {type: "text", id: "input", value: "office location", onclick: "javascript: this.value = \"\""}), 
                        React.createElement("img", {src: "images/icon-location.png", id: "input_img"})
                    ), 
                    
                    React.createElement("div", {class: "submitButton"}, 
                    React.createElement("input", {type: "button", value: "SUBMIT", onclick: "window.location = 'DirectoryList.html'"})
                    )
                )
			), 
    
            
            React.createElement("div", {id: "footer"}, 
            	"© 2015 GMR Marketing"
            )
                
        )
)
        );
    }
});