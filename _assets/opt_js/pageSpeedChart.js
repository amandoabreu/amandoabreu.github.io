window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
};

window.randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}

var lineChartData = {
    labels: ["1 sec", "2 sec", "3 sec", "4 sec", "5 sec", "6 sec", "7 sec", "8 sec", "9 sec", "10 sec"],
    datasets: [{
        label: "Abandonment",
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [
            5,
            10,
            15,
            20,
            25,
            28,
            30,
            31,
            32,
            33,
        ],
        yAxisID: "y-axis-1",
    },
    ]
};

window.onload = function() {
    var pageSpeed = document.getElementById("pageSpeedChart").getContext("2d");
    window.myLine = Chart.Line(pageSpeed, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title:{
                display: true,
                text:'Page load time versus abandonment'
            },
            scales: {
                yAxes: [{
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                }, {
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: false,
                    position: "right",
                    id: "y-axis-2",

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });

    if($(".mobileVsDesktop").length > 0) {
        var mobileVsDesktop = document.getElementById("mobileVsDesktop").getContext("2d");

        var data = {
            labels: [
                "Red",
                "Blue",
                "Yellow"
            ],
            datasets: [
                {
                    data: [3, 15, 16, 16, 20, 30],
                    backgroundColor: [
                        "#4989e0",
                        "#3e72b9",
                        "#3E73B8",
                        "#2f578c",
                        "#264773",
                        "#1f395d",
                    ]
                }]
        };

        var myPieChart = new Chart(mobileVsDesktop, {
            type: 'pie',
            data: data,
            options: {
                reponsive: false,
                title: {
                    display: true,
                    text: 'Patience of mobile web users'
                },
            }
        });
    }

};