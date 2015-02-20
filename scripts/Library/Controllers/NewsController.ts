module GMR.Controllers {
    export class NewsController {
        componentDidMount() {
            Shared.InitMenu();
            $('#directoryBox').height($(window).height());
        }

    }
} 