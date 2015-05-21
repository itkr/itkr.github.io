/*
var doughnutData = [
　　{
　　　value: 30,
　　　color:"#aaf2fb"
　　},
　　{
　　　value: 50,
　　　color: "#ffb6b9"
　　},
　　{
　　　value: 120,
　　　color: "#ffe361"
　　},
   {
　　　value: 170,
　　　color: "#fbaa6e"
　　},
   {
　　　value: 70,
　　　color: "#A8BECB"
　　}
];
 
var myDoughnut = new Chart(
    document.getElementById("sample").getContext("2d")).Doughnut(doughnutData);
*/

var data = {
    labels: ["-12(年)", "-11", "-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "現在"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [55, 60, 61, 62, 55, 55, 60, 60, 60, 62, 67, 62, 60]
        }
//        {
//            label: "My Second dataset",
//            fillColor: "rgba(151,187,205,0.2)",
//            strokeColor: "rgba(151,187,205,1)",
//            pointColor: "rgba(151,187,205,1)",
//            pointStrokeColor: "#fff",
//            pointHighlightFill: "#fff",
//            pointHighlightStroke: "rgba(151,187,205,1)",
//            data: [55, 60, 61, 62, 55, 55, 60, 60, 60, 62, 67, 62, 60]
//        }
    ]
};
new Chart(document.getElementById("sample").getContext("2d")).Line(data, {
    bezierCurve: false
});