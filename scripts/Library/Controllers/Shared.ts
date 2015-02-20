module GMR.Controllers {
    export class Shared {
        public static InitMenu() {
            $('#menu').show();
            $('#menu').off();
            $('#menu').on("click", function (e) {
                e.preventDefault();
                if ($("#nav").hasClass("navOpened")) {
                    $('#nav').removeClass("navOpened");
                    $('#content').removeClass("navOpened");
                } else {
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
        }
    }
} 