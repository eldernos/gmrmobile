var DirectoryDetailView: any;
module GMR.Controllers {
    export class DirectoryListController {
        componentDidMount() {
            Shared.InitMenu();
            Application.PreviousFilterResults = this["props"].items;
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
        }
        itemClicked(item) {
            React.render(React.createElement(DirectoryDetailView, { item: item }), document.getElementById('content'));
        }

    }
} 