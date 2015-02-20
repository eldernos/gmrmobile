var DirectoryListView = React.createClass({displayName: "DirectoryListView",
	mixins: [GMR.Controllers.DirectoryListController.prototype],
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
        		React.createElement("div", {className: "leadCardContent"}, 
            		React.createElement("h1", null, "GMR DIRECTORY"), 
					React.createElement("div", {className: "backButton"}, 
                		React.createElement("a", {href: "javascript:history.go(-1)"}, React.createElement("img", {src: "images/icon-back.png", border: "0"}))
					)
				), 
				this.props.items.map(function(item, i) {
					return (
						React.createElement("div", {className: "card"}, 
            				React.createElement("div", {className: "cardContent"}, 
								React.createElement("div", {className: "thumbnail"}, 
									React.createElement("div", {className: "thumbnailImage"}, React.createElement("img", {src: 'https://auto_process:$ervice09$ervice09@fbservices.gmrmarketing.com/GetDirectoryPhoto/' + item.DirectoryId, border: "0"}))
								), 
								React.createElement("div", {className: "thumbnailContent"}, 
                    				React.createElement("span", {className: "name"}, item.FirstName, " ", item.LastName), 
									React.createElement("span", {className: "title"}, item.Title), 
									React.createElement("span", {className: "phone"}, item.PhoneNumber)
								)
                    
							)
						)     
					);
				}, this)
			)
        );
    }
});