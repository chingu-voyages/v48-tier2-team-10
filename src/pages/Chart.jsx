import DonutChart from "./DonutChart";
import PieChart from "./PieChart";
import { data, data2 } from "../ChartSource";
import "../pages/Chart.css";

function Chart() {
  return (
    <>
      <div className="container">
        <div className="title">
          <p>
            <img src="./images/Vector.png"></img> Composition about Dinosaurs{" "}
            <img src="./images/Vectorright.png"></img>
          </p>
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
  );
}
export default Chart;
