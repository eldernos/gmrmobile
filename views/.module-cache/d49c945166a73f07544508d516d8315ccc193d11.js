var NewsView = React.createClass({displayName: "NewsView",
	mixins: [GMR.Controllers.NewsController.prototype],
    render: function() {

        return (
		React.createElement("div", null, 
        	React.createElement("div", {className: "newsCardContent"}, 
            	React.createElement("div", {className: "newsImage"}, 
                	React.createElement("img", {src: "http://dummyimage.com/500x300"})
                ), 
                React.createElement("div", {className: "newsContent"}, 
            		React.createElement("h1", null, "News Headline"), 
            		React.createElement("p", null, "Bacon ipsum dolor amet t-bone jerky brisket, beef shank bacon pork chop flank. Beef ribs pancetta rump ham hock short ribs shankle capicola sirloin bresaola tri-tip tail. Fatback tenderloin doner pancetta tail cow, turducken leberkas pastrami ham hock t-bone flank. Fatback pork chop swine, short loin ribeye hamburger leberkas pig kielbasa shankle pastrami capicola landjaeger bacon venison. Rump pork jowl venison, filet mignon meatball chuck chicken sirloin landjaeger. Turkey pork loin jowl ground round, hamburger pig kielbasa.")
				)
            ), 
        	React.createElement("div", {className: "newsCardContent"}, 
            	React.createElement("div", {className: "newsImage"}, 
                	React.createElement("img", {src: "http://dummyimage.com/500x300"})
                ), 
                React.createElement("div", {className: "newsContent"}, 
            		React.createElement("h1", null, "News Headline"), 
            		React.createElement("p", null, "Bacon ipsum dolor amet t-bone jerky brisket, beef shank bacon pork chop flank. Beef ribs pancetta rump ham hock short ribs shankle capicola sirloin bresaola tri-tip tail. Fatback tenderloin doner pancetta tail cow, turducken leberkas pastrami ham hock t-bone flank. Fatback pork chop swine, short loin ribeye hamburger leberkas pig kielbasa shankle pastrami capicola landjaeger bacon venison. Rump pork jowl venison, filet mignon meatball chuck chicken sirloin landjaeger. Turkey pork loin jowl ground round, hamburger pig kielbasa.")
				)
            )
		)
        );
    }
});