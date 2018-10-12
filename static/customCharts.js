 $(function () {

    var ctx = document.getElementById("barChart").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: 'Clicks',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgba(210,214,222,0.6)",
            borderColor: "rgba(210,214,222,1)",   
            borderWidth: 1
        },{
            label: 'Conversions',
            data: [1, 8, 6, 2, 8, 1],
            backgroundColor: "rgba(0, 166, 90, 0.6)",
            borderColor: "rgba(0, 166, 90, 1)", 
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var ctx = document.getElementById('areaChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'Clicks',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(75,148,192,0.6)"
    }, {
      label: 'Conversions',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(210,214,222,0.6)"
    }]
  }
});




    


    

    
  });