var DirectoryView = React.createClass({displayName: "DirectoryView",
	mixins: [GMR.Controllers.DirectoryDetailController.prototype],
    render: function() {
        return ( 
		       React.createElement("div", {className: "leadCardContent"}, 
                React.createElement("div", {className: "backButton"}, 
                	React.createElement("a", {href: "javascript:void(0);"}, React.createElement("img", {src: "images/icon-back.png", border: "0"}))
                ), 
                React.createElement("div", {id: "directoryProfile"}, 
                    React.createElement("div", {id: "directoryProfileImage"})
                ), 
                React.createElement("div", {id: "directoryProfileText"}, 
            		React.createElement("h1", {className: "one-word-per-line"}, item.FirstName, " ", item.LastName), 
                    React.createElement("span", {className: "directoryProfileLocation"}, React.createElement("a", {href: "javascript:void(0);"}, "Milwaukee")), 
                    React.createElement("div", {id: "directoryProfileDetails"}, 
                    	React.createElement("span", {className: "directoryTitle"}, item.Title), 
                        React.createElement("span", {className: "directoryGroup"}, item.Organization), 
                        React.createElement("span", {className: "directoryPhone"}, React.createElement("a", {href: "javascript:void(0);"}, item.PhoneNumber)), 
                        React.createElement("span", {className: "directoryEmail"}, React.createElement("a", {href: "javascript:void(0);"}, item.Office))
                    ), 
                    React.createElement("div", {id: "directoryButtons"}, 
                    	React.createElement("div", {className: "directoryButtonCTA"}, 
                        	React.createElement("span", {className: "directoryButtonIcon"}, 
                            	React.createElement("img", {src: "images/icon-mail.png", width: "20"})
                            ), 
                            React.createElement("span", {className: "directoryButtonText"}, 
                            	"Email" 
                            )
                        ), 
                        
                    	React.createElement("div", {className: "directoryButtonCTA"}, 
                        	React.createElement("span", {className: "directoryButtonIcon"}, 
                            	React.createElement("img", {src: "images/icon-phone.png", width: "20"})
                            ), 
                            React.createElement("span", {className: "directoryButtonText"}, 
                            	"Office Direct"
                            )
                        )
                                               
                    )
                )
			) 
		)}

});