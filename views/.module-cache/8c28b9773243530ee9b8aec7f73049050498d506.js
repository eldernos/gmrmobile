var LocationsView = React.createClass({displayName: "LocationsView",
	mixins: [GMR.Controllers.LocationsController.prototype],
    render: function() {
        return ( 
			React.createElement("div", {id: "directoryBox"}, 
			React.createElement("div", {className: "leadCardContent"}, 
            	React.createElement("h1", null, "Office Locations"), 
                React.createElement("p", null, "Our dedicated new business line is (800) 447-8560")
			), 

            React.createElement("div", {className: "card"}, 
            	React.createElement("div", {className: "cardContent"}, 
                    React.createElement("div", {className: "location"}, 
                        React.createElement("div", {className: "locationImage"}, "NA")
                    ), 
                    React.createElement("div", {className: "locationContent"}, 
                    	React.createElement("span", {className: "name"}, "Global Headquarters"), 
                        React.createElement("span", {className: "address"}, "5000 S Towne Drive"), 
                        React.createElement("span", {className: "city"}, "New Berlin WI 53151")
                    )
                    
                )
            ), 
            
            React.createElement("div", {className: "card"}, 
            	React.createElement("div", {className: "cardContent"}, 
                    React.createElement("div", {className: "location"}, 
                        React.createElement("div", {className: "locationImage", style: ""}, "NA")
                    ), 
                    React.createElement("div", {className: "locationContent"}, 
                    	React.createElement("span", {className: "name"}, "Charlotte"), 
                        React.createElement("span", {className: "address"}, "Address"), 
                        React.createElement("span", {className: "city"}, "City, State Zip")
                    )
                    
                )
            ), 
            
            React.createElement("div", {className: "card"}, 
            	React.createElement("div", {className: "cardContent"}, 
                    React.createElement("div", {className: "location"}, 
                        React.createElement("div", {className: "locationImage", style: ""}, "NA")
                    ), 
                    React.createElement("div", {className: "locationContent"}, 
                    	React.createElement("span", {className: "name"}, "Charlotte"), 
                        React.createElement("span", {className: "address"}, "Address"), 
                        React.createElement("span", {className: "city"}, "City, State Zip")
                    )
                    
                )
            ), 
            
            React.createElement("div", {className: "card"}, 
            	React.createElement("div", {className: "cardContent"}, 
                    React.createElement("div", {className: "location"}, 
                        React.createElement("div", {className: "locationImage"}, "EAU")
                    ), 
                    React.createElement("div", {className: "locationContent"}, 
                    	React.createElement("span", {className: "name"}, "London"), 
                        React.createElement("span", {className: "address"}, "Address"), 
                        React.createElement("span", {className: "city"}, "City, State Zip")
                    )
                    
                )
            )
			)
		);}
	});
