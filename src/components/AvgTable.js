import { useState, useEffect} from "react";
import dataMockAvg from "../MockData/dataMockAvg.json"

const AvgTable = ({bossName}) => {
    // for table population
    const [avgData, setAvgData] = useState(dataMockAvg);



    return (
        <div>
            <h3 className="tableHeader"> Highest Average DPS </h3>
            <h6> Boss Pass Test: {bossName} </h6>
            <table>
                <tbody>
                    {avgData.map((data) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.profession}</td>
                            <td>{data.dps}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default AvgTable
