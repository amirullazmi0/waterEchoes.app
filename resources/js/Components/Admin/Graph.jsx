import { useState } from "react"
import ChartItem from "./ChartItem"

const Graph = ({ weekly, monthly, daily }) => {
    const [iniDaily, setDaily] = useState(daily)
    const [iniWeekly, setWeekly] = useState(weekly)
    const [iniMonthly, setMonthly] = useState(monthly)

    const hourlyLabels = [
        '1', '2', '3', '4', '5', '6',
        '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24'
    ]
    const dailyLabels = [
        'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'
    ]
    const weeklyLabels = [
        'Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'
    ]
    const monthlyLabels = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'
    ]
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center all-sensor overflow-x-auto">
                {/* <ChartItem title={"Daily Chart"} label={dailyLabels} /> */}
                <ChartItem
                    title={"Weekly Chart"}
                    label={weeklyLabels}
                    dataGrafik={iniWeekly}
                />
                <ChartItem
                    title={"Monthly Chart"}
                    label={monthlyLabels}
                    dataGrafik={iniMonthly}
                />
            </div>
        </>
    )
}

export default Graph    