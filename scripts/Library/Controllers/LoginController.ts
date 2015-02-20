
module GMR.Controllers {
    export class LoginController {
        componentDidMount() {
            //Shared.InitMenu();
            $('#menu').hide();
            $('#logo').hide();
            this["setState"]({ email: "chanderson" });
            this["setState"]({ password: "Still another password." });
        }
        handleEmailChange(e) {
            this["setState"]({ email: e.target.value });
	    }
        handlePasswordChange(e) {
            this["setState"]({ password: e.target.value });

	    }
        handleSubmit() {
            if ("email" in this["state"] && "password" in this["state"]) {

                GMR.Okta.SuccessCallback = (function (d) {
                    Application.UserName = this["state"].email;
                    Application.Password = this["state"].password;
                    $('#logo').show();
                    Application.LoggedIn(d);
                    
                }).bind(this);
                GMR.Okta.ErrorCallback = (function(e) {
                    alert('error authenticating');
                }).bind(this);
                GMR.Okta.Authenticate(this["state"].email, this["state"].password);
                
            }
        }

    }
} 