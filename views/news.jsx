var NewsView = React.createClass({
	mixins: [GMR.Controllers.NewsController.prototype],
    render: function() {

        return (
		<div id="directoryBox">
        	<div className="newsCardContent">
            	<div className="newsImage">
                	<img src="http://dummyimage.com/500x300"/>
                </div>
                <div className="newsContent">
            		<h1>News Headline</h1>
            		<p>Bacon ipsum dolor amet t-bone jerky brisket, beef shank bacon pork chop flank. Beef ribs pancetta rump ham hock short ribs shankle capicola sirloin bresaola tri-tip tail. Fatback tenderloin doner pancetta tail cow, turducken leberkas pastrami ham hock t-bone flank. Fatback pork chop swine, short loin ribeye hamburger leberkas pig kielbasa shankle pastrami capicola landjaeger bacon venison. Rump pork jowl venison, filet mignon meatball chuck chicken sirloin landjaeger. Turkey pork loin jowl ground round, hamburger pig kielbasa.</p>
				</div>
            </div>
        	<div className="newsCardContent">
            	<div className="newsImage">
                	<img src="http://dummyimage.com/500x300"/>
                </div>
                <div className="newsContent">
            		<h1>News Headline</h1>
            		<p>Bacon ipsum dolor amet t-bone jerky brisket, beef shank bacon pork chop flank. Beef ribs pancetta rump ham hock short ribs shankle capicola sirloin bresaola tri-tip tail. Fatback tenderloin doner pancetta tail cow, turducken leberkas pastrami ham hock t-bone flank. Fatback pork chop swine, short loin ribeye hamburger leberkas pig kielbasa shankle pastrami capicola landjaeger bacon venison. Rump pork jowl venison, filet mignon meatball chuck chicken sirloin landjaeger. Turkey pork loin jowl ground round, hamburger pig kielbasa.</p>
				</div>
            </div>
		</div>
        );
    }
});