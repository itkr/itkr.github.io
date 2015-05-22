(function(global, document){
    var $ = function(id){
        return document.getElementById(id);
    };

	// weight
    new Chart($("graph-weight").getContext("2d")).Line({
        labels: ["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        datasets: [{
            label: "Weight",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [55, 60, 61, 62, 55, 55, 60, 60, 60, 62, 65, 62, 60]
        }]
    }, {});

	// events
	new Chart($("graph-events").getContext("2d")).Doughnut([
        {label: 'Ice hockey', value: 15, color:"#aaf2fb"},
        {label: 'Runnnig', value: 1, color: "#ffb6b9"},
        {label: 'Climbing', value: 1, color: "#ffe361"},
        {label: 'Weight', value: 2, color: "#fbaa6e"},
        {label: 'Other', value: 0, color: "#A8BECB"}
    ]);
}(this, this.document));
