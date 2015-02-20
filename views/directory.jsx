var DirectoryView = React.createClass({
	mixins: [GMR.Controllers.DirectoryController.prototype],
    render: function() {
        return ( 
        	<div className="leadCardContent">
            	<h1>GMR DIRECTORY</h1>
                <p><strong>Find Employees</strong><br/>Type a name or part of a name into any of the boxes below.</p>
                <div className="formFields">
                	
                    <div className="input_container">
                    <br/>
                        <input className="input" type="text" id="txtFirstName" placeholder="first name" onChange={this.handleFirstNameChange} />
                        <img src="images/icon-profile.png" className="input_img"/>
                    </div>    
                    
                    <div className="input_container">
                    <br/>
                        <input className="input"  type="text" id="txtLastName"  placeholder="last name" onChange={this.handleLastNameChange}/>
                        <img src="images/icon-profile.png" className="input_img"/>
                    </div>    
                    
                    <div className="input_container">
                    <br/>
                        <input className="input" type="text" id="txtPosition"  placeholder="position" onChange={this.handlePositionChange}/>
                        <img src="images/icon-profile.png" className="input_img"/>
                    </div>    
                   
                    <div className="input_container">
                    <br/>
                        <input className="input" type="text" id="txtSupervisor"  placeholder="supervisor" onChange={this.handleSupervisorChange}/>
                        <img src="images/icon-profile.png" className="input_img"/>
                    </div>    
                    
                    <div className="input_container">
                    <br/>
                        <input className="input" type="text" id="txtLocation"  placeholder="office location" onChange={this.handleLocationChange}/>
                        <img src="images/icon-location.png" className="input_img"/>
                    </div>    
                    
                    <div className="submitButton">
                    <button type="button" onClick={this.handleSubmit} ontouchend={this.handleSubmit}>SUBMIT</button>   
                    </div>                                                                                         
                </div>
			</div>
    
        
        );
    }
});