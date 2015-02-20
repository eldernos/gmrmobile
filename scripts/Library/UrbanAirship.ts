declare var PushNotification: any;
module GMR {
    export class UrbanAirship {
        private static pushEnabled: boolean;
        private static pushId: string;

        public static Init(callback, status?): void {
            if (status) {
                UrbanAirship.pushResume(status, callback);
                return;
            }
            // Check for push enabled.  
            PushNotification.isPushEnabled((e) => {
                UrbanAirship.pushEnabled = e;
                if (e) {
                    // Has Push.  Get ID
                    PushNotification.getPushID((ev) => {
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

        }
        public static Unhook(): void {
            UrbanAirship.unhookEvents();
        }
        private static pushResume(status, callback): void {
            console.dir(status);
            callback();
        }
        public static PushReceived(e): void {
            if (e.message) {
                console.log(e.message);
            }
            else {

            }
        }
        public static RegistrationComplete(e): void {
            if (e.error) {
                console.log("Error in registration: " + e.error);
            }
            else {
                var that = this;
                console.log('Registration complete');
                PushNotification.getPushID((ev) => {
                    UrbanAirship.pushId = ev;
                    that["callback"]();
                    
                });
            }
        }
        private static hookEvents(): void {
            document.addEventListener("urbanairship.registration", UrbanAirship.PushReceived, false);
            document.addEventListener("urbanairship.push", UrbanAirship.RegistrationComplete, false);
        }
        private static unhookEvents(): void {
            document.removeEventListener("urbanairship.registration", UrbanAirship.PushReceived, false);
            document.removeEventListener("urbanairship.push", UrbanAirship.RegistrationComplete, false);
        }
        
        private static register(cb): void {
            UrbanAirship.RegistrationComplete["callback"] = cb;
            PushNotification.registerForNotificationTypes(PushNotification.notificationType.badge | PushNotification.notificationType.sound | PushNotification.notificationType.alert);


        }
        private static enablePush(): void {

        }
    }
}

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

