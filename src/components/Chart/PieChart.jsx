import { Pie } from '@nivo/pie'
import styles from './PieChart.module.css'
import { useContext } from 'react'
import { DinoDataContext } from '../../context/DinoDataContext'

const PieChart = () => {
  const { dietData } = useContext(DinoDataContext)

  return (
    <>
      <div className={styles.pieContainer}>
        <p style={{ textAlign: 'center' }}>
          Diet Composition for All Dinosaurs
        </p>

        <Pie
          className="pieChart"
          data={dietData}
          width={370}
          height={290}
          margin={{ top: 15, right: 80, bottom: 70, left: -68 }}
          valueFormat={(value) => `${value}%`}
          padAngle={0.1}
          cornerRadius={1}
          activeOuterRadiusOffset={5}
          colors={{ scheme: 'nivo' }}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.6]]
          }}
          theme={{
            labels: {
              text: {
                fontSize: 13
              }
            }
          }}
          arcLinkLabelsSkipAngle={200}
          arcLinkLabelsTextColor="white"
          arcLinkLabelsThickness={0}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="white"
          legends={[
            {
              anchor: 'bottom',
              direction: 'column',
              justify: false,
              translateX: 168,
              translateY: -30,
              itemsSpacing: 12,
              itemWidth: 100,
              itemHeight: 20,
              itemTextColor: 'black',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 14,
              symbolShape: 'square'
            }
          ]}
        />
      </div>
    </>
  )
}

export default PieChart
