import React from "react"
import { renderToString } from "react-dom/server"
import Chart from "react-apexcharts"
import sweetAlert from "sweetalert2"

import { csatSeries } from "../data"
import { getApexData } from "../utils"

class MyApexChart extends React.Component {
  render() {
    const series = [
      getApexData(csatSeries, "negative"),
      getApexData(csatSeries, "neutral"),
      getApexData(csatSeries, "positive")
    ]

    return (
      <div className="donut">
        <Chart
          options={{
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "60%"
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
              type: "datetime",
              labels: {
                format: "MMM yy"
              }
            },
            labels: [1, 2, 4, 4, 5, 6],
            yaxis: {
              title: {
                text: "$ (thousands)"
              }
            },
            fill: {
              colors: ["#ea4335", "#fbbc04", "#34a853"],
              opacity: 1
            },
            colors: ["#ea4335", "#fbbc04", "#34a853"],
            legend: {
              show: true,
              inverseOrder: true
            },
            tooltip: {
              enabled: true,
              onDatasetHover: {
                highlightDataSeries: true
              },
              // this replaces all x,y,z options
              // custom() {
              //   return renderToString(
              //     <div>
              //       <h2>test</h2>
              //     </div>
              //   )
              // },
              x: {
                show: false
              },
              // y: {
              //   formatter: undefined,
              //   title: {
              //     formatter: seriesName => seriesName
              //   }
              // },
              marker: {
                show: true
              },
              fixed: {
                enabled: false,
                position: "topRight",
                offsetX: 0,
                offsetY: 0
              }
            },
            chart: {
              zoom: { enabled: false },
              stacked: this.props.stacked,
              events: {
                dataPointSelection: (event, chartContext, config) => {
                  const selectedSeries = series[config.seriesIndex]
                  sweetAlert.fire(
                    `Click ${selectedSeries.name}: ${
                      selectedSeries.data[config.dataPointIndex].y
                    }`
                  )
                }
              }
            }
          }}
          series={series}
          type="bar"
          height="350"
          width="100%"
        />
      </div>
    )
  }
}

export default MyApexChart
