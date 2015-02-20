module GMR.Controllers {
    export class DirectoryDetailController {
        componentDidMount() {
            Shared.InitMenu();
            $('#directoryBox').height($(window).height());
        }

        backClicked() {
            React.render(React.createElement(DirectoryListView, { items: GMR.Application.PreviousFilterResults }), document.getElementById('content'));
        }
    }
}