var LoginView = React.createClass({
	mixins: [GMR.Controllers.LoginController.prototype],
    render: function() {

        return (
            <form id="login" onSubmit={this.handleSubmit}>
            	<div id="loginLogo">
                	<img src="images/gmrlogo.png" border="0"/>
                </div>
                <div className="input_container">
                <br/>
                    <input type="text" className="input"  id="txtEmail" placeholder="email" onChange={this.handleEmailChange}  />
                    <img src="images/icon-profile.png" id="input_img"/>
                </div>    
                <div className="input_container">
                <br/>
                    <input type="password" className="input"  id="txtPassword" name="password" placeholder="password" onChange={this.handlePasswordChange}/>
                    <img src="images/icon-lock.png" id="input_img"/>
                </div>    
                 
                    <div className="submitButton">
                    <button type="button" onClick={this.handleSubmit}>SUBMIT</button>   
                    </div>                                            
            </form>
        );
    }
});