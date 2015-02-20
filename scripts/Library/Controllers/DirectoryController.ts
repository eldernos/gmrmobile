
module GMR.Controllers {
    export class DirectoryController {

        componentDidMount() {
            Shared.InitMenu();
            this["setState"]({ firstname: "" });
            this["setState"]({ lastname: "" });
            this["setState"]({ position: ""});
            this["setState"]({ supervisor: "" });
            this["setState"]({ location: "" });
        }

        handleFirstNameChange(e) {
            this["setState"]({ firstname: e.target.value });
        }
        handleLastNameChange(e) {
            this["setState"]({ lastname: e.target.value });
        }
        handlePositionChange(e) {
            this["setState"]({ position: e.target.value });
        }
        handleSupervisorChange(e) {
            this["setState"]({ supervisor: e.target.value });
        }
        handleLocationChange(e) {
            this["setState"]({ location: e.target.value });
        }
        handleSubmit() {
            var rawData = GMR.Application.Directory.slice(0);
            var filteredData = rawData.filter((e, i, a)=> {
                return (
                    this["state"].firstname != '' ? e.FirstName.indexOf(this["state"].firstname) > -1 : true &&
                    this["state"].lastname != '' ? e.LastName.indexOf(this["state"].lastname) > -1 : true &&
                    this["state"].position != '' ? e.Title.indexOf(this["state"].position) > -1 : true &&
                    this["state"].supervisor != '' ? e.Supervisor.indexOf(this["state"].supervisor) > -1 : true &&
                    this["state"].location != '' ? e.Office.indexOf(this["state"].location) > -1 : true
                );
            });
            React.render(React.createElement(DirectoryListView, {items: filteredData}), document.getElementById('content'));
        }

    }
}  