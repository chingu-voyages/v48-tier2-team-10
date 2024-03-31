import DonutChart from './DonutChart'
import PieChart from './PieChart'
import { data, data2 } from './ChartSource'
import './Chart.css'

function Chart() {
  return (
    <>
      <div className="container">
        <div className="title">
          <img className="left" src="/images/Vector.png"></img>

          <p>Composition about Dinosaurs</p>
          <img className="right" src="./images/Vectorright.png"></img>
        </div>

        <div className="wrap">
          <div className="pie-chart">
            <PieChart data={data} />
          </div>
          <div className="donut-chart">
            <DonutChart data={data2} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Chart
