import { useState, useEffect} from "react";
import dataMockBest from "../MockData/dataMockBest.json"

const BestTable = ({bossName}) => {
    const [bestData, setBestData] = useState(dataMockBest);


    return (
        <div>
            <h3 className="tableHeader"> Record DPS </h3>
            <table className="bestTable">
                <tbody>
                    {bestData.map((data) => (
                        <tr>
                            <td className="profTableData">{data.profession}</td>
                            <td>{data.dps}</td>
                            <td>{data.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BestTable
