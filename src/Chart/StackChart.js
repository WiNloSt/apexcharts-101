import React from "react";

import Chart from "react-apexcharts";
import sweetAlert from "sweetalert2";
class MyApexChart extends React.Component {
  render() {
    return (
      <div className="donut">
        <Chart
          options={{
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded"
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ["transparent"]
            },
            xaxis: {
              categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct"
              ]
            },
            yaxis: {
              title: {
                text: "$ (thousands)"
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function(val) {
                  return "$ " + val + " thousands";
                }
              }
            },
            chart: {
              stacked: true,
              events: {
                dataPointSelection: (event, chartContext, config) => {
                  sweetAlert.fire(`Yeah i got pop up`);
                }
              }
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
          colors={["#1B2260"]}
          type="bar"
          height="350"
          width="500"
        />
      </div>
    );
  }
}

export default MyApexChart;
