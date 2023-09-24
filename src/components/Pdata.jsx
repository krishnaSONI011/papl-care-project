import React,{useState} from "react";
import Mapper from "./Mapper";

export default function Pdata(props) {
    let distance = [];
    let markers = [];
    const [showMap, setShowMap] = useState(true);
    const toggleMap = () => {
      setShowMap(!showMap);
    };
    props.data.data.map((a)=>{
         
          return  distance.push(a.Odometer)
          

             
    })
    props.data.data.map((a)=>{
      return markers.push({lat:a.Lattitude , lng:a.Longitude})
    })
  return (
    <>
      {/* Top section  */}
      <div className="border border-primary rounded-1 p-2 mt-2  mb-2">
        <ul className="d-flex list-unstyled justify-content-evenly">
          <li>
            <span className="fw-medium">Vehicle:</span> {props.data.data.length <=0 ? "not found" : props.data.data[0].VehicleNo}
          </li>
          <li>
            <span className="fw-medium">Date:</span> {props.startDate}
            <span className="fw-medium"> To </span> {props.endDate}
          </li>
          
        </ul>
      </div>
      {/* / */}
      {/* middle section  */}
      <div className="overflow-y-scroll" style={{height:"400px"}}>
        <div>
          {/* <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Vehicle No</th>

                <th className="text-center">Location</th>
              </tr>
            </thead>
            <tbody>
                            {props.viewClicked && props.data.data.length > 0 ? (
                                props.data.data.map((a) => (
                                    <tr>
                                        <td>#</td>
                                        <td>{a.VehicleNo}</td>
                                        <td>{a.Location}</td>
                                       
                                        
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center">
                                        {props.viewClicked ? "No data available" : "Click 'View' to load data"}
                                    </td>
                                </tr>
                            )}
                        </tbody>
          </table> */}
        {showMap && <Mapper markers={markers}/>}
        </div>
      </div>

      {/* last section */}
      <div className="bg-primary text-white border-primary rounded-1 p-2 mt-3  mb-2">
        <ul className="d-flex list-unstyled justify-content-evenly">
          <li className="text-center">
        {props.data.data.length<=0 ? "not found" : props.data.data[0].callingTime}
            <br />
            DATE/TIME
          </li>
          <li className="text-center">
         {parseInt(distance[0]) - parseInt(distance[distance.length-1] )}
            <br />
            KM RUN
          </li>
          <li className="text-center">
            {props.data.data.length <=0  ?  "not found": props.data.data[0].Lattitude}
            <br />
            LATITUDE
          </li>
          <li className="text-center">
        {props.data.data.length <=0  ? "not found": props.data.data[0].Longitude } <br />
            LOGGITUDE
          </li>
        </ul>
      </div>
      {console.log()}
    </>
    
  );
}
