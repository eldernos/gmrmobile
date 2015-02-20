declare var React: any;
declare var LoginView: any;
declare var DirectoryView: any;
declare var DirectoryListView: any;
declare var NewsView: any;
declare var LocationsView: any;
module GMR {
    export class Application {
        private static app: Application;
        public static get App(): Application {
            return Application.app;
        }
        private static currentUser;
        public static UserName;
        public static Password;
        public static get CurrentUser() {
            return Application.currentUser;
        }
        private static views;

        public static PreviousFilterResults;
        public static Init() {
            Application.app = new Application();
            GMR.App = Application.App;

            React.initializeTouchEvents(true);


            $('body').height($(window).height());
            $('#container').height($(window).height());
            $('#content').height($(window).height());
            


            $('#navDirectory').on("touchend", (e) => {
                $('#menu').trigger('click');
                React.render(React.createElement(DirectoryView, null), document.getElementById('content'));
            });
            $('#navLocation').on("touchend",(e) => {
                React.render(React.createElement(LocationsView, null), document.getElementById('content'));
            });

            $('#navNews').on("touchend",(e) => {
                $('#menu').trigger('click');
                React.render(React.createElement(NewsView, null), document.getElementById('content'));
            });

            $('#navWebsite').on("touchend",(e) => {
                window.open('http://www.gmrmarketing.com', '_system');
            });




            React.render(
                React.createElement(LoginView, null),
                document.getElementById('content')
                );



        }
        public static Directory;
        public static LoggedIn(loginResult) {
            $.getJSON("data.json", function (data) {
                data.value.sort(function (a, b) {
                    if (a.LastName > b.LastName) return 1;
                    if (a.LastName < b.LastName) return -1;
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
        }
    }

    export var App: Application;
}


function onDeviceReady() {
    console.log("Device Ready");




    $(document).ready(() => {
        GMR.Application.Init();


        //React.render(
        //    React.createElement(LoginView, null),
        //    document.getElementById('content'));
    });

};

function onPause() {
    console.log("Pause");
    GMR.UrbanAirship.Unhook();
    // TODO: This application has been suspended. Save application state here.
};

function onResume() {
    console.log("Resume");
    // TODO: This application has been reactivated. Restore application state here.
    PushNotification.getIncoming(function (status) {
        GMR.UrbanAirship.Init(status, function () {
            console.log("Init callback");
        });
    });
};


document.addEventListener("deviceready", onDeviceReady, false);

