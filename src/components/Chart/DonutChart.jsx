import { ResponsivePieCanvas } from '@nivo/pie'
import styles from './DonutChart.module.css'
import { useContext } from 'react'
import { DinoDataContext } from '../../context/DinoDataContext'

const DonutChart = () => {

  const {typeData} = useContext(DinoDataContext);
  const filteredData = typeData.filter(
    (entry) => entry.value !== null && entry.value !== undefined
  )

  return (
    <>
      <div className={styles.topContainer}>
        <p>Type Composition</p>
        <ResponsivePieCanvas
          data={filteredData}
          width={360}
          height={300}
          margin={{ top: 18, right: 120, bottom: 60, left: 3 }}
          innerRadius={0.6}
          padAngle={0.9}
          cornerRadius={1}
          activeOuterRadiusOffset={8}
          colors={{ scheme: 'nivo' }}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.6]]
          }}
          theme={{
            labels: {
              text: {
                fontSize: 13,
              },
            },
          }}
          arcLabelsRadiusOffset={100}
          arcLinkLabelsSkipAngle={100}
          arcLinkLabelsTextColor="white"
          arcLinkLabelsThickness={0}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="#333333"
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          legends={[
            {
              anchor: 'bottom',
              direction: 'column',
              justify: false,
              translateX: 140,
              translateY: 20,
              itemsSpacing: 15,
              itemWidth: 40,
              itemHeight: 15,
              itemTextColor: 'black',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 14,
              symbolShape: 'circle'
            }
          ]}
        />
      </div>
    </>
  )
}

export default DonutChart
