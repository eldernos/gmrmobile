var LoginView = React.createClass({displayName: "LoginView",
	mixins: [GMR.Controllers.LoginController.prototype],
    render: function() {

        return (
			React.createElement("div", null, 
				React.createElement("div", {id: "filter"}, 
            		React.createElement("a", {href: "#"}, "A"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "B"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "C"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "D"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "E"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "F"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "G"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "H"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "I"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "J"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "K"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "L"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "M"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "N"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "O"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "P"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "Q"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "R"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "S"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "T"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "U"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "V"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "W"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "X"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "Y"), React.createElement("br", null), 
					React.createElement("a", {href: "#"}, "Z"), React.createElement("br", null)
				), 
        		React.createElement("div", {class: "leadCardContent"}, 
            		React.createElement("h1", null, "GMR DIRECTORY"), 
					React.createElement("div", {class: "backButton"}, 
                		React.createElement("a", {href: "javascript:history.go(-1)"}, React.createElement("img", {src: "images/icon-back.png", border: "0"}))
					)
				), 
				this.props.items.map(function(item, i) {
					return (
						React.createElement("div", {class: "card"}, 
            				React.createElement("div", {class: "cardContent"}, 
								React.createElement("div", {class: "thumbnail"}, 
									React.createElement("div", {class: "thumbnailImage"})
								), 
								React.createElement("div", {class: "thumbnailContent"}, 
                    				React.createElement("span", {class: "name"}, item.FirstName, " ", item.LastName), 
									React.createElement("span", {class: "title"}, item.Title), 
									React.createElement("span", {class: "phone"}, item.PhoneNumber)
								)
                    
							)
						)     
					);
				}, this), 
                   
				React.createElement("div", {id: "footer"}, 
            		"© 2015 GMR Marketing"
				)
			)
        );
    }
});