import React from "react";

import Chart from "react-apexcharts";
import sweetAlert from "sweetalert2";
class MyApexChart extends React.Component {
  render() {
    return (
      <div className="donut">
        <Chart
          options={{
            colors: ["#F44336", "#E91E63", "#9C27B0"],
            chart: {
              height: 350,
              type: "line",
              zoom: {
                enabled: true
              }
            },
            series: [
              {
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
              }
            ],
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: "straight"
            },
            title: {
              text: "Product Trends by Month",
              align: "left"
            },
            grid: {
              row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5
              }
            },
            xaxis: {
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep"
              ]
            }
          }}
          series={[
            {
              name: "Net Profit",
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            },
            {
              name: "Revenue",
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            },
            {
              name: "Free Cash Flow",
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }
          ]}
          type="line"
          height="350"
          width="500"
        />
      </div>
    );
  }
}

export default MyApexChart;
