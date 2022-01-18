import { useState, useEffect} from "react";
import dataMockAvg from "../MockData/dataMockAvg.json"

const AvgTable = ({bossName}) => {
    // for table population
    const [avgData, setAvgData] = useState(dataMockAvg);



    return (
        <div>
            <h3 className="tableHeader"> Highest Average DPS </h3>
            <table className="avgTable">
                <tbody>
                    {avgData.map((data) => (
                        <tr>
                            <td className="profTableData">{data.profession}</td>
                            <td>{data.dps}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default AvgTable
