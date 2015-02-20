var DirectoryListView = React.createClass({displayName: "DirectoryListView",
	mixins: [GMR.Controllers.DirectoryListController.prototype],
    render: function() {

        return (
			React.createElement("div", {id: "directoryBox"}, 
				React.createElement("div", {id: "filter"}, 
            		React.createElement("a", {href: "javascript:void(0)"}, "A"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "B"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "C"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "D"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "E"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "F"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "G"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "H"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "I"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "J"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "K"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "L"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "M"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "N"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "O"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "P"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "Q"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "R"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "S"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "T"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "U"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "V"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "W"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "X"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "Y"), React.createElement("br", null), 
					React.createElement("a", {href: "javascript:void(0)"}, "Z"), React.createElement("br", null)
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
									React.createElement("div", {className: "thumbnailImage"}, React.createElement("img", {src: 'images/directory/' + item.DirectoryId + '.jpg', border: "0", width: "50", height: "50"}))
								), 
								React.createElement("div", {className: "thumbnailContent"}, 
								    React.createElement("span", {className: "lastNameIndex"}, item.LastName), 
                    				React.createElement("span", {onClick: this.itemClicked.bind(null, item), className: "name"}, item.FirstName, " ", item.LastName), 
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