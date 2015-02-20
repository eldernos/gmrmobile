var DirectoryDetailView = React.createClass({displayName: "DirectoryDetailView",
	mixins: [GMR.Controllers.DirectoryDetailController.prototype],
    render: function() {
        return ( 
			
		       React.createElement("div", {id: "directoryBox", className: "leadCardContent"}, 
                React.createElement("div", {className: "backButton", onClick: this.backClicked}, 
                	React.createElement("a", {href: "javascript:void(0);"}, React.createElement("img", {src: "images/icon-back.png", border: "0"}))
                ), 
                React.createElement("div", {id: "directoryProfile"}, 
                    React.createElement("div", {id: "directoryProfileImage"}, React.createElement("img", {src: 'images/directory/' + this.props.item.DirectoryId + '.jpg', border: "0", width: "50", height: "50"}))
                ), 
                React.createElement("div", {id: "directoryProfileText"}, 
            		React.createElement("h1", {className: "one-word-per-line"}, this.props.item.FirstName, " ", this.props.item.LastName), 
                    React.createElement("span", {className: "directoryProfileLocation"}, React.createElement("a", {href: "javascript:void(0);"}, this.props.Office)), 
                    React.createElement("div", {id: "directoryProfileDetails"}, 
                    	React.createElement("span", {className: "directoryTitle"}, this.props.item.Title), 
                        React.createElement("span", {className: "directoryGroup"}, this.props.item.Organization), 
                        React.createElement("span", {className: "directoryPhone"}, React.createElement("a", {href: "javascript:void(0);"}, this.props.item.PhoneNumber)), 
                        React.createElement("span", {className: "directoryEmail"}, React.createElement("a", {href: "javascript:void(0);"}, this.props.item.Office))
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