import { Pie } from "@nivo/pie";
import "./PieChart.Module.css";
import React from "react";

const PieChart = ({ data }) => {
  return (
    <>
      <div className="pieContainer">
        <p>Diet Composition</p>

        <Pie
          className="pieChart"
          data={data}
          width={350}
          height={300}
          margin={{ top: 20, right: 90, bottom: 40, left: 0 }}
          valueFormat={(value) => `${value}%`}
          padAngle={0.1}
          cornerRadius={1}
          activeOuterRadiusOffset={5}
          colors={{ scheme: "nivo" }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.6]],
          }}
          theme={{
            labels: {
              text: {
                fontSize: 13,
              },
            },
          }}
          arcLinkLabelsSkipAngle={200}
          arcLinkLabelsTextColor="white"
          arcLinkLabelsThickness={0}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="white"
          legends={[
            {
              anchor: "bottom",
              direction: "column",
              justify: false,
              translateX: 180,
              translateY: -70,
              itemsSpacing: 12,
              itemWidth: 100,
              itemHeight: 20,
              itemTextColor: "black",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 14,
              symbolShape: "square",
            },
          ]}
        />
      </div>
    </>
  );
};

export default PieChart;
