var DirectoryDetailView = React.createClass({
	mixins: [GMR.Controllers.DirectoryDetailController.prototype],
    render: function() {
        return ( 
			<div id="directoryBox">
		       <div className="leadCardContent">
                <div className="backButton" onClick={this.backClicked}>
                	<a href="javascript:void(0);"><img src="images/icon-back.png" border="0"/></a>
                </div>            
                <div id="directoryProfile">
                    <div id="directoryProfileImage"><img src={'images/directory/' + this.props.item.DirectoryId + '.jpg'} border="0" width="180" height="180"/></div>
                </div>    
                <div id="directoryProfileText">        
            		<h1 className="one-word-per-line">{this.props.item.FirstName} {this.props.item.LastName}</h1>
                    <span className="directoryProfileLocation"><a href="javascript:void(0);">{this.props.Office}</a></span>
                    <div id="directoryProfileDetails">
                    	<span className="directoryTitle">{this.props.item.Title}</span>
                        <span className="directoryGroup">{this.props.item.Organization}</span>
                        <span className="directoryPhone"><a href="javascript:void(0);">{this.props.item.PhoneNumber}</a></span>
                        <span className="directoryEmail"><a href="javascript:void(0);">{this.props.item.Office}</a></span>
                    </div> 
                    <div id="directoryButtons">
                    	<div className="directoryButtonCTA">
                        	<span className="directoryButtonIcon">
                            	<img src="images/icon-mail.png" width="20"/>
                            </span>
                            <span className="directoryButtonText">
                            	Email 
                            </span>
                        </div>
                        
                    	<div className="directoryButtonCTA">
                        	<span className="directoryButtonIcon">
                            	<img src="images/icon-phone.png" width="20"/>
                            </span>
                            <span className="directoryButtonText">
                            	Office Direct
                            </span>
                        </div>
                                               
                    </div>
                </div>
			</div> 
			</div>
		)}

});