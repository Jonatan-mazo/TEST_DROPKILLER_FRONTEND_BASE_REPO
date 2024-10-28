export type ChartTypes = {
  labels: string[],
  datasets: dataSets[],
}

export type dataSets = {
  label: string,
  data: number[],
  fill: boolean,
  cubicInterpolationMode: string,
  tension: number,
  backgroundColor: string[],
  borderColor: string[],
  borderWidth: number
}

export type selectedChart = {
  sales: ChartTypes
  billing: ChartTypes
  stock: ChartTypes
}