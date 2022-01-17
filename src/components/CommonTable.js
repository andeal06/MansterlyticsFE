import { useState, useEffect} from "react";
import dataMockCommon from "../MockData/dataMockCommon.json";


const CommonTable = ({ bossName }) => {
    // used for table population
    const [cmnData, setCmnData] = useState(dataMockCommon);

    // used for fetching data
    /*useEffect( () => {
        const getData = async () => {
            const serverData = await fetchData()
            setCmnData(serverData)
        }

        getData()
    }, []) 
    
    const fetchData = async () => {
            const response = await fetch()
            const data = await response.json()

            return data
        }
    
    
    */

    return (
        <div>
            <h3 className="tableHeader"> Most Common Builds </h3> 
            <h6> Boss Name pass test: {bossName} </h6>
            <table>
                <tbody>
                    {cmnData.map((data) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.profession}</td>
                            <td>{data.appears}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>  
    )
}

export default CommonTable
