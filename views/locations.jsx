var LocationsView = React.createClass({
	mixins: [GMR.Controllers.LocationsController.prototype],
    render: function() {
        return ( 
			<div id="directoryBox">
			<div className="leadCardContent">
            	<h1>Office Locations</h1>
                <p>Our dedicated new business line is (800) 447-8560</p>
			</div>

            <div className="card">
            	<div className="cardContent">
                    <div className="location">
                        <div className="locationImage">NA</div>
                    </div>
                    <div className="locationContent">
                    	<span className="name">Global Headquarters</span>
                        <span className="address">5000 S Towne Drive</span>
                        <span className="city">New Berlin WI 53151</span>
                    </div> 
                    
                </div>
            </div>
            
            <div className="card">
            	<div className="cardContent">
                    <div className="location">
                        <div className="locationImage" style="">NA</div>
                    </div>
                    <div className="locationContent">
                    	<span className="name">Charlotte</span>
                        <span className="address">Address</span>
                        <span className="city">City, State Zip</span>
                    </div> 
                    
                </div>
            </div>
            
            <div className="card">
            	<div className="cardContent">
                    <div className="location">
                        <div className="locationImage" style="">NA</div>
                    </div>
                    <div className="locationContent">
                    	<span className="name">Charlotte</span>
                        <span className="address">Address</span>
                        <span className="city">City, State Zip</span>
                    </div> 
                    
                </div>
            </div>
            
            <div className="card">
            	<div className="cardContent">
                    <div className="location">
                        <div className="locationImage">EAU</div>
                    </div>
                    <div className="locationContent">
                    	<span className="name">London</span>
                        <span className="address">Address</span>
                        <span className="city">City, State Zip</span>
                    </div> 
                    
                </div>
            </div>
			</div>
		);}
	});
