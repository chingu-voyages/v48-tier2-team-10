import DonutChart from './DonutChart'
import PieChart from './PieChart'
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
            <PieChart/>
          </div>
          <div className="donut-chart">
            <DonutChart/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Chart
