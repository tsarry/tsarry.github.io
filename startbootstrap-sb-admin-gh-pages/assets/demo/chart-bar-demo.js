// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let cuteCount = 0;
let sillyCount = 0;
let fluffyCount = 0;
let sleepyCount = 0;
let maleCount = 0;
let femaleCount = 0;

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Cute", "Silly", "Fluffy", "Sleepy", "Male", "Female"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [cuteCount, sillyCount, fluffyCount, sleepyCount, maleCount, femaleCount]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

function fetchCuteCount() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://cataas.com/api/cats?tags=cute", true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = function () {
      if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          json = xhr.responseText;
          js = JSON.parse(json);
          cuteCount = js.length;

          myLineChart.data.datasets[0].data[0] = cuteCount;
          myLineChart.update();
      } else {
          console.error("Failed to load cat image.");
      }
  };

  xhr.send();
}

function fetchSillyCount() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://cataas.com/api/cats?tags=silly", true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = function () {
      if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          json = xhr.responseText;
          js = JSON.parse(json);
          sillyCount = js.length;

          myLineChart.data.datasets[0].data[1] = sillyCount;
          myLineChart.update();
      } else {
          console.error("Failed to load cat image.");
      }
  };

  xhr.send();
}

function fetchFluffyCount() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://cataas.com/api/cats?tags=fluffy", true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = function () {
      if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          json = xhr.responseText;
          js = JSON.parse(json);
          fluffyCount = js.length;

          myLineChart.data.datasets[0].data[2] = fluffyCount;
          myLineChart.update();
      } else {
          console.error("Failed to load cat image.");
      }
  };

  xhr.send();
}

function fetchSleepyCount() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://cataas.com/api/cats?tags=sleepy", true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = function () {
      if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          json = xhr.responseText;
          js = JSON.parse(json);
          sleepyCount = js.length;

          myLineChart.data.datasets[0].data[3] = sleepyCount;
          myLineChart.update();
      } else {
          console.error("Failed to load cat image.");
      }
  };

  xhr.send();
}

function fetchMaleCount() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://cataas.com/api/cats?tags=male", true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = function () {
      if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          json = xhr.responseText;
          js = JSON.parse(json);
          maleCount = js.length;

          myLineChart.data.datasets[0].data[4] = maleCount;
          myLineChart.update();
      } else {
          console.error("Failed to load cat image.");
      }
  };

  xhr.send();
}

function fetchFemaleCount() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://cataas.com/api/cats?tags=female", true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onload = function () {
      if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          json = xhr.responseText;
          js = JSON.parse(json);
          femaleCount = js.length;

          myLineChart.data.datasets[0].data[5] = femaleCount;
          myLineChart.update();
      } else {
          console.error("Failed to load cat image.");
      }
  };

  xhr.send();
}

fetchCuteCount();
fetchSillyCount();
fetchSleepyCount();
fetchFluffyCount();
fetchMaleCount();
fetchFemaleCount();