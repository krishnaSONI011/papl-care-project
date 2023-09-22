import React, { useState, useEffect } from "react";
import Form from "./Form";
import Pdata from "./Pdata";
import axios from 'axios';

let Point_2 = () => {
    const [vehicle, setVehicle] = useState("");
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [data, setdata] = useState([]);
    const [viewClicked, setViewClicked] = useState(false); // State to track button click

    function formatDateToMMDDYY(inputDate) {
        const date = new Date(inputDate);
        const year = String(date.getFullYear()).slice(-2);
        const month = String(date.getMonth() + 1);
        const day = String(date.getDate());
        return `${month}/${day}/${year}`;
    }

    const fetchData = async () => {
        try {
            const startDate = formatDateToMMDDYY(startdate) + " " + startTime;
            const endDate = formatDateToMMDDYY(enddate) + " " + endTime;
            
            const res = await axios.post("http://localhost:8080/filterData", {
                vehicleNo: vehicle,
                startDate,
                endDate
            });

            setdata(res.data);
            setViewClicked(true); // Button click triggers re-render of Pdata
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log(data); // Log data when it updates
    }, [data]);

    return (
        <div className="row w-100 vh-100">
            <div className="col-md-4 p-3 border-end d-flex align-items-center h-100">
                <div className="text-center w-100">
                    <Form
                        vehicle={setVehicle}
                        startdate={setStartdate}
                        enddate={setEnddate}
                        starttime={setStartTime}
                        endtime={setEndTime}
                    />
                    <div className='text-center py-3'>
                        <button className='btn btn-primary' onClick={fetchData}>View</button>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                {
                    data.length <= 0 ? 
                    <div className="d-flex justify-content-center align-items-center h-75">
                        <div className="">
                                Enter Detail To Show Data
                        </div>
                        </div>
                        :
                        <Pdata
                    data={data}
                    viewClicked={viewClicked} 
                    startDate = {startdate}
                    endDate = {enddate}
                    
                />
                }
                
            </div>
        </div>
    )
}

export default Point_2;
