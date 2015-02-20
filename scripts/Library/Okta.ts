
module GMR {
    export class Okta {
        public static SuccessCallback: (data) => void;
        public static InvalidCallback: (data) => void;
        public static ErrorCallback: (error) => void;

        public static Authenticate(username: string, password: string) {

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
                    //"Authorization": "SSWS 00s5xybB7LK6bp7JxfdfJ2MY7CDhdJwueRuz13cP-0"
                },
                dataType: 'json',
                success: function(data) {
                    if (data.status == "SUCCESS") {
                        Okta.SuccessCallback(data);
                    } else {
                        Okta.InvalidCallback(data);
                    }
                },
                error: Okta.ErrorCallback
            });
        }


    }
}
