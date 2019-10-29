import React from "react";

import Chart from "react-apexcharts";
import sweetAlert from "sweetalert2";
class MyApexChart extends React.Component {
  render() {
    return (
      <div className="donut">
        <Chart
          options={{
            labels: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            chart: {
              events: {
                dataPointSelection: (event, chartContext, config) => {
                  sweetAlert.fire("Yeah i got pop up");
                }
              }
            },
            theme: {
              monochrome: {
                enabled: false
              }
            },
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100%"
                  },
                  legend: {
                    show: false
                  }
                }
              }
            ]
          }}
          colors={["#1B2260"]}
          series={[44, 55, 41, 17, 15]}
          labels={["Apple", "Mango", "Orange", "Watermelon"]}
          type="donut"
          width="500"
        />
      </div>
    );
  }
}

export default MyApexChart;
