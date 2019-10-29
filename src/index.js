import React, { useState } from "react"
import ReactDOM from "react-dom"

import BarChart from "./Chart/BarChart"
import StackChart from "./Chart/StackChart"
import DonutChart from "./Chart/DonutChart"
import LineChart from "./Chart/LineChart"
import { csatSeries } from "./data"

import "./styles.css"

function App() {
  const [range, setRange] = useState(csatSeries.length)
  const data = csatSeries.slice(0, range)
  return (
    <div className="App">
      <Range
        range={range}
        min={5}
        max={csatSeries.length}
        onAdd={() => setRange(range => range + 1)}
        onSubtract={() => setRange(range => range - 1)}
      />
      <h1>Sentiment by month</h1>
      <BarChart data={data} />
      <BarChart data={data} stacked />
      {/* <StackChart /> */}
      {/* <LineChart /> */}
      {/* <DonutChart /> */}
      {/* <h2>Text below bar chart</h2> */}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

function noop() {}
function Range({ min, max, range, onAdd, onSubtract }) {
  if (range <= min) {
    onSubtract = noop
  }

  if (range >= max) {
    onAdd = noop
  }

  return (
    <div>
      <h4>Change me to see data change</h4>
      <span>
        <input value={range} disabled />
        <button onClick={onSubtract}>-</button>
        <button onClick={onAdd}>+</button>
      </span>
    </div>
  )
}
