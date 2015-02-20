var DirectoryListView = React.createClass({
	mixins: [GMR.Controllers.DirectoryListController.prototype],
    render: function() {

        return (
			<div id="directoryBox">
				<div id="filter">
            		<a href="javascript:void(0)">A</a><br/>
					<a href="javascript:void(0)">B</a><br/>
					<a href="javascript:void(0)">C</a><br/>
					<a href="javascript:void(0)">D</a><br/>
					<a href="javascript:void(0)">E</a><br/>
					<a href="javascript:void(0)">F</a><br/>
					<a href="javascript:void(0)">G</a><br/>
					<a href="javascript:void(0)">H</a><br/>
					<a href="javascript:void(0)">I</a><br/>
					<a href="javascript:void(0)">J</a><br/>
					<a href="javascript:void(0)">K</a><br/>
					<a href="javascript:void(0)">L</a><br/>
					<a href="javascript:void(0)">M</a><br/>
					<a href="javascript:void(0)">N</a><br/>
					<a href="javascript:void(0)">O</a><br/>
					<a href="javascript:void(0)">P</a><br/>
					<a href="javascript:void(0)">Q</a><br/>
					<a href="javascript:void(0)">R</a><br/>
					<a href="javascript:void(0)">S</a><br/>
					<a href="javascript:void(0)">T</a><br/>
					<a href="javascript:void(0)">U</a><br/>
					<a href="javascript:void(0)">V</a><br/>
					<a href="javascript:void(0)">W</a><br/>
					<a href="javascript:void(0)">X</a><br/>
					<a href="javascript:void(0)">Y</a><br/>
					<a href="javascript:void(0)">Z</a><br/>
				</div>
        		<div className="leadCardContent">
            		<h1>GMR DIRECTORY</h1>
					<div className="backButton"> 
                		<a href="javascript:history.go(-1)"><img src="images/icon-back.png" border="0"/></a>
					</div>
				</div>
				{this.props.items.map(function(item, i) { 
					return (
						<div className="card" onClick={this.itemClicked.bind(null, item)}>
            				<div className="cardContent">
								<div className="thumbnail">
									<div className="thumbnailImage"><img src={'images/directory/' + item.DirectoryId + '.jpg'} border="0" width="50" height="50"/></div>
								</div>
								<div className="thumbnailContent">
								    <span className="lastNameIndex">{item.LastName}</span>
                    				<span className="name">{item.FirstName} {item.LastName}</span>
									<span className="title">{item.Title}</span>
									<span className="phone">{item.PhoneNumber}</span>
								</div> 
                    
							</div>
						</div>     
					);
				}, this)}
			</div>
        );
    }
});