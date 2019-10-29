import * as R from "ramda"

export function getApexData(data, key) {
  return {
    name: capitalize(key),
    data: R.map(dataPoint => {
      return {
        x: dataPoint.date,
        y: dataPoint[key]
      }
    }, data)
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
