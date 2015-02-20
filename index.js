var GMR;
(function (GMR) {
    var Controllers;
    (function (Controllers) {
        var DirectoryController = (function () {
            function DirectoryController() {
            }
            DirectoryController.prototype.componentDidMount = function () {
                Controllers.Shared.InitMenu();
                this["setState"]({ firstname: "" });
                this["setState"]({ lastname: "" });
                this["setState"]({ position: "" });
                this["setState"]({ supervisor: "" });
                this["setState"]({ location: "" });
            };
            DirectoryController.prototype.handleFirstNameChange = function (e) {
                this["setState"]({ firstname: e.target.value });
            };
            DirectoryController.prototype.handleLastNameChange = function (e) {
                this["setState"]({ lastname: e.target.value });
            };
            DirectoryController.prototype.handlePositionChange = function (e) {
                this["setState"]({ position: e.target.value });
            };
            DirectoryController.prototype.handleSupervisorChange = function (e) {
                this["setState"]({ supervisor: e.target.value });
            };
            DirectoryController.prototype.handleLocationChange = function (e) {
                this["setState"]({ location: e.target.value });
            };
            DirectoryController.prototype.handleSubmit = function () {
                var _this = this;
                var rawData = GMR.Application.Directory.slice(0);
                var filteredData = rawData.filter(function (e, i, a) {
                    return (_this["state"].firstname != '' ? e.FirstName.indexOf(_this["state"].firstname) > -1 : true && _this["state"].lastname != '' ? e.LastName.indexOf(_this["state"].lastname) > -1 : true && _this["state"].position != '' ? e.Title.indexOf(_this["state"].position) > -1 : true && _this["state"].supervisor != '' ? e.Supervisor.indexOf(_this["state"].supervisor) > -1 : true && _this["state"].location != '' ? e.Office.indexOf(_this["state"].location) > -1 : true);
                });
                React.render(React.createElement(DirectoryListView, { items: filteredData }), document.getElementById('content'));
            };
            return DirectoryController;
        })();
        Controllers.DirectoryController = DirectoryController;
    })(Controllers = GMR.Controllers || (GMR.Controllers = {}));
})(GMR || (GMR = {}));
var GMR;
(function (GMR) {
    var Controllers;
    (function (Controllers) {
        var DirectoryDetailController = (function () {
            function DirectoryDetailController() {
            }
            DirectoryDetailController.prototype.componentDidMount = function () {
                Controllers.Shared.InitMenu();
                $('#directoryBox').height($(window).height());
            };
            DirectoryDetailController.prototype.backClicked = function () {
                React.render(React.createElement(DirectoryListView, { items: GMR.Application.PreviousFilterResults }), document.getElementById('content'));
            };
            return DirectoryDetailController;
        })();
        Controllers.DirectoryDetailController = DirectoryDetailController;
    })(Controllers = GMR.Controllers || (GMR.Controllers = {}));
})(GMR || (GMR = {}));
var DirectoryDetailView;
var GMR;
(function (GMR) {
    var Controllers;
    (function (Controllers) {
        var DirectoryListController = (function () {
            function DirectoryListController() {
            }
            DirectoryListController.prototype.componentDidMount = function () {
                Controllers.Shared.InitMenu();
                GMR.Application.PreviousFilterResults = this["props"].items;
                $('#directoryBox').height($(window).height());
                $('#filter').children().on('click', function (e) {
                    var searchString = $(e.target).html();
                    var el = $(".lastNameIndex").filter(function () {
                        return ($(this).text().toUpperCase().substring(0, 1) >= searchString);
                    }).eq(0);
                    $('#directoryBox').scrollTop(0);
                    $('#directoryBox').stop().animate({
                        'scrollTop': el.parents('.card').offset().top
                    }, 200, 'swing');
                    //var el = $(".name").filter(function () {
                    //    var text = $(this).text().toUpperCase();
                    //    var spacePos = text.indexOf(' ');
                    //    var test = text.substr(spacePos + 1, 1);
                    //    return (test == searchString);
                });
            };
            DirectoryListController.prototype.itemClicked = function (item) {
                React.render(React.createElement(DirectoryDetailView, { item: item }), document.getElementById('content'));
            };
            return DirectoryListController;
        })();
        Controllers.DirectoryListController = DirectoryListController;
    })(Controllers = GMR.Controllers || (GMR.Controllers = {}));
})(GMR || (GMR = {}));
var GMR;
(function (GMR) {
    var Controllers;
    (function (Controllers) {
        var LocationsController = (function () {
            function LocationsController() {
            }
            LocationsController.prototype.componentDidMount = function () {
                Controllers.Shared.InitMenu();
                $('#directoryBox').height($(window).height());
            };
            return LocationsController;
        })();
        Controllers.LocationsController = LocationsController;
    })(Controllers = GMR.Controllers || (GMR.Controllers = {}));
})(GMR || (GMR = {}));
var GMR;
(function (GMR) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController() {
            }
            LoginController.prototype.componentDidMount = function () {
                //Shared.InitMenu();
                $('#menu').hide();
                $('#logo').hide();
                this["setState"]({ email: "chanderson" });
                this["setState"]({ password: "Still another password." });
            };
            LoginController.prototype.handleEmailChange = function (e) {
                this["setState"]({ email: e.target.value });
            };
            LoginController.prototype.handlePasswordChange = function (e) {
                this["setState"]({ password: e.target.value });
            };
            LoginController.prototype.handleSubmit = function () {
                if ("email" in this["state"] && "password" in this["state"]) {
                    GMR.Okta.SuccessCallback = (function (d) {
                        GMR.Application.UserName = this["state"].email;
                        GMR.Application.Password = this["state"].password;
                        $('#logo').show();
                        GMR.Application.LoggedIn(d);
                    }).bind(this);
                    GMR.Okta.ErrorCallback = (function (e) {
                        alert('error authenticating');
                    }).bind(this);
                    GMR.Okta.Authenticate(this["state"].email, this["state"].password);
                }
            };
            return LoginController;
        })();
        Controllers.LoginController = LoginController;
    })(Controllers = GMR.Controllers || (GMR.Controllers = {}));
})(GMR || (GMR = {}));
var GMR;
(function (GMR) {
    var Controllers;
    (function (Controllers) {
        var NewsController = (function () {
            function NewsController() {
            }
            NewsController.prototype.componentDidMount = function () {
                Controllers.Shared.InitMenu();
                $('#directoryBox').height($(window).height());
            };
            return NewsController;
        })();
        Controllers.NewsController = NewsController;
    })(Controllers = GMR.Controllers || (GMR.Controllers = {}));
})(GMR || (GMR = {}));
var GMR;
(function (GMR) {
    var Controllers;
    (function (Controllers) {
        var Shared = (function () {
            function Shared() {
            }
            Shared.InitMenu = function () {
                $('#menu').show();
                $('#menu').off();
                $('#menu').on("click", function (e) {
                    e.preventDefault();
                    if ($("#nav").hasClass("navOpened")) {
                        $('#nav').removeClass("navOpened");
                        $('#content').removeClass("navOpened");
                    }
                    else {
                        $('#nav').addClass("navOpened");
                        $('#content').addClass("navOpened");
                    }
                    //if ($("body").hasClass("navOpened")) {
                    //    $("#nav").animate({
                    //        left: -300
                    //    }, 600, function () { });
                    //    $('#content').animate({
                    //        left: 0
                    //    }, 600, function () {
                    //            $('body').css('overflow', 'auto').removeClass("navOpened");
                    //        });
                    //} else {
                    //    $("body").css("overflow", "hidden").addClass("navOpened");
                    //    $("#nav").animate({
                    //        left: 0
                    //    }, 600, function () { });
                    //    $("#content").animate({
                    //        left: 300
                    //    }, 600, function () { });
                    //}
                });
            };
            return Shared;
        })();
        Controllers.Shared = Shared;
    })(Controllers = GMR.Controllers || (GMR.Controllers = {}));
})(GMR || (GMR = {}));
var GMR;
(function (GMR) {
    var Factbook = (function () {
        function Factbook() {
        }
        Factbook.SyncDirectory = function () {
        };
        Factbook.SyncNews = function () {
        };
        Factbook.GetDirectoryPhoto = function (id) {
            /*


            $.ajax
            ({
              type: "GET",
              url: "index1.php",
              dataType: 'json',
              async: false,
              headers: {
                "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
              },
              data: '{ "comment" }',
              success: function (){
                alert('Thanks for your comment!');
              }
            });
             */
        };
        Factbook.IndexByAlphabet = function (data) {
            //var index = [];
            //var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            //var currEmp = 0;
            //var currLetter = 0;
            //for (var cl = 0; cl < letters.length; cl++) {
            //    var found = false;
            //    while (!found) {
            //        var emp = data[currEmp];
            //        if (emp.LastName[0] == )
            //    }
            //    currEmp++;
            //}
        };
        Factbook.AUTHBYTES = "bWFya2V0aW5nXGF1dG9fcHJvY2VzczokZXJ2aWNlMDkkZXJ2aWNlMDk=";
        return Factbook;
    })();
    GMR.Factbook = Factbook;
})(GMR || (GMR = {}));
var GMR;
(function (GMR) {
    var Application = (function () {
        function Application() {
        }
        Object.defineProperty(Application, "App", {
            get: function () {
                return Application.app;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Application, "CurrentUser", {
            get: function () {
                return Application.currentUser;
            },
            enumerable: true,
            configurable: true
        });
        Application.Init = function () {
            Application.app = new Application();
            GMR.App = Application.App;
            React.initializeTouchEvents(true);
            $('body').height($(window).height());
            $('#container').height($(window).height());
            $('#content').height($(window).height());
            $('#navDirectory').on("touchend", function (e) {
                $('#menu').trigger('click');
                React.render(React.createElement(DirectoryView, null), document.getElementById('content'));
            });
            $('#navLocation').on("touchend", function (e) {
                React.render(React.createElement(LocationsView, null), document.getElementById('content'));
            });
            $('#navNews').on("touchend", function (e) {
                $('#menu').trigger('click');
                React.render(React.createElement(NewsView, null), document.getElementById('content'));
            });
            $('#navWebsite').on("touchend", function (e) {
                window.open('http://www.gmrmarketing.com', '_system');
            });
            React.render(React.createElement(LoginView, null), document.getElementById('content'));
        };
        Application.LoggedIn = function (loginResult) {
            $.getJSON("data.json", function (data) {
                data.value.sort(function (a, b) {
                    if (a.LastName > b.LastName)
                        return 1;
                    if (a.LastName < b.LastName)
                        return -1;
                    return 0;
                });
                Application.currentUser = data.value.filter(function (e, i, a) {
                    return e.LastName.toUpperCase() == loginResult._embedded.user.profile.lastName.toUpperCase() && e.FirstName.toUpperCase() == loginResult._embedded.user.profile.firstName.toUpperCase();
                })[0];
                $('#profileImage').css('background', 'url(images/directory/' + Application.currentUser.DirectoryId + '.jpg) no-repeat');
                GMR.Application.Directory = data.value;
                GMR.UrbanAirship.Init(function () {
                    console.log("Init callback");
                });
                React.render(React.createElement(DirectoryView, null), document.getElementById('content'));
            });
        };
        return Application;
    })();
    GMR.Application = Application;
    GMR.App;
})(GMR || (GMR = {}));
function onDeviceReady() {
    console.log("Device Ready");
    $(document).ready(function () {
        GMR.Application.Init();
        //React.render(
        //    React.createElement(LoginView, null),
        //    document.getElementById('content'));
    });
}
;
function onPause() {
    console.log("Pause");
    GMR.UrbanAirship.Unhook();
    // TODO: This application has been suspended. Save application state here.
}
;
function onResume() {
    console.log("Resume");
    // TODO: This application has been reactivated. Restore application state here.
    PushNotification.getIncoming(function (status) {
        GMR.UrbanAirship.Init(status, function () {
            console.log("Init callback");
        });
    });
}
;
document.addEventListener("deviceready", onDeviceReady, false);
var GMR;
(function (GMR) {
    var Okta = (function () {
        function Okta() {
        }
        Okta.Authenticate = function (username, password) {
            $.ajax({
                url: 'https://gmrmarketing.okta.com/api/v1/authn',
                type: 'post',
                data: JSON.stringify({
                    "username": username,
                    "password": password,
                    "relayState": ""
                }),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "SSWS 00cgpfy09mCF12qykuaYG05mILvtCWwe1K3UfqkSJi"
                },
                dataType: 'json',
                success: function (data) {
                    if (data.status == "SUCCESS") {
                        Okta.SuccessCallback(data);
                    }
                    else {
                        Okta.InvalidCallback(data);
                    }
                },
                error: Okta.ErrorCallback
            });
        };
        return Okta;
    })();
    GMR.Okta = Okta;
})(GMR || (GMR = {}));
var GMR;
(function (GMR) {
    var UrbanAirship = (function () {
        function UrbanAirship() {
        }
        UrbanAirship.Init = function (callback, status) {
            if (status) {
                UrbanAirship.pushResume(status, callback);
                return;
            }
            // Check for push enabled.  
            PushNotification.isPushEnabled(function (e) {
                UrbanAirship.pushEnabled = e;
                if (e) {
                    // Has Push.  Get ID
                    PushNotification.getPushID(function (ev) {
                        UrbanAirship.pushId = ev;
                        UrbanAirship.hookEvents();
                        callback(true);
                    });
                }
                else {
                    // Doesn't have push. 
                    UrbanAirship.hookEvents();
                    UrbanAirship.register(callback);
                }
            });
        };
        UrbanAirship.Unhook = function () {
            UrbanAirship.unhookEvents();
        };
        UrbanAirship.pushResume = function (status, callback) {
            console.dir(status);
            callback();
        };
        UrbanAirship.PushReceived = function (e) {
            if (e.message) {
                console.log(e.message);
            }
            else {
            }
        };
        UrbanAirship.RegistrationComplete = function (e) {
            if (e.error) {
                console.log("Error in registration: " + e.error);
            }
            else {
                var that = this;
                console.log('Registration complete');
                PushNotification.getPushID(function (ev) {
                    UrbanAirship.pushId = ev;
                    that["callback"]();
                });
            }
        };
        UrbanAirship.hookEvents = function () {
            document.addEventListener("urbanairship.registration", UrbanAirship.PushReceived, false);
            document.addEventListener("urbanairship.push", UrbanAirship.RegistrationComplete, false);
        };
        UrbanAirship.unhookEvents = function () {
            document.removeEventListener("urbanairship.registration", UrbanAirship.PushReceived, false);
            document.removeEventListener("urbanairship.push", UrbanAirship.RegistrationComplete, false);
        };
        UrbanAirship.register = function (cb) {
            UrbanAirship.RegistrationComplete["callback"] = cb;
            PushNotification.registerForNotificationTypes(PushNotification.notificationType.badge | PushNotification.notificationType.sound | PushNotification.notificationType.alert);
        };
        UrbanAirship.enablePush = function () {
        };
        return UrbanAirship;
    })();
    GMR.UrbanAirship = UrbanAirship;
})(GMR || (GMR = {}));
//console.log('***DEVICE READY***');
//var onPush = function (event) {
//    if (event.message) {
//        console.log("Incoming push: " + event.message)
//    } else {
//        console.log("No incoming message")
//    }
//}
//// Registration callback
//var onRegistration = function (event) {
//    if (!event.error) {
//        console.log("Reg Success: " + event.pushID)
//        //$('#id').text(event.pushID)
//    } else {
//        console.log("ERROR: " + event.error)
//    }
//}
//document.addEventListener("urbanairship.registration", onRegistration, false);
//console.log("Added Registration Listener");
//document.addEventListener("urbanairship.push", onPush, false);
//console.log("Added Push Listener");
//PushNotification.registerForNotificationTypes(PushNotification.notificationType.badge | PushNotification.notificationType.sound | PushNotification.notificationType.alert);
var GMR;
(function (GMR) {
    var ViewManager = (function () {
        function ViewManager() {
        }
        ViewManager.Load = function () {
        };
        return ViewManager;
    })();
    GMR.ViewManager = ViewManager;
})(GMR || (GMR = {}));
//# sourceMappingURL=index.js.map