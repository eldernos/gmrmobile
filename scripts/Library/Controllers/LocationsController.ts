module GMR.Controllers {
    export class LocationsController {
        componentDidMount() {
            Shared.InitMenu();
            $('#directoryBox').height($(window).height());
        }

    }
} 