import Button from "./Button"
import CommonTable from "./CommonTable"
import AvgTable from "./AvgTable"
import BestTable from "./BestTable"




const BossQuickView = ({ bossName }) => {

    const AdvStats = () => {
        console.log("Adv stats test for: ", {bossName} )
    }

    return (
        <div className="BossQuickView">
            
            <div className="BQVHeader">
                <h2>{bossName}</h2>
                <Button text="Advanced Stats" onClick={AdvStats}/>
            </div>
            
            <div className="BQVTablesDiv">
                <CommonTable bossName={bossName}/>
                <AvgTable bossName={bossName}/>
                <BestTable bossName={bossName}/>
            </div>
        </div>
    )
}

export default BossQuickView
