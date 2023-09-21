import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import loder from '../loder.webp';

let Point_1 = () => {
    let [data, setData] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');
    let [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            let res = await axios.get("http://localhost:8080/");
            setData(res.data.Vehicle);
            setFilteredData(res.data.Vehicle);
        } catch (err) {
            console.log(err);
        }
    }

    // Function to handle search input changes
    const handleSearch = () => {
        const newFilteredData = data.filter((item) =>
            item.VehicleNo.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(newFilteredData);
    };

    // Function to reset the search
    const handleReset = () => {
        setSearchTerm('');
        setFilteredData(data);
    };

    return (
        <div className="container">
            {/* search box */}
            <div className="d-flex justify-content-center  p-3">
            <div className="mb-3 me-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Vehicle Number"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <button className="btn btn-primary mr-2 me-3" onClick={handleSearch}>Search</button>
                <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
            </div>
            </div>
           
            {data.length <= 0 ? (
                <div className="text-center">
                    <img src={loder} alt="" className="w-20" />
                </div>
            ) : (
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>VehicleNo</th>
                            <th>Imei</th>
                            <th>Location</th>
                            <th>Last seen</th>
                            <th>Ignition</th>
                            <th>Map</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((a, key) => (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{a.VehicleNo}</td>
                                <td>{a.Imei}</td>
                                <td>{a.Location}</td>
                                <td>{a.Date}</td>
                                <td>
                                    {a.Ignition === "0" ? (
                                        <span className="text-danger">OFF</span>
                                    ) : (
                                        <span className="text-success">ON</span>
                                    )}
                                </td>
                                <td>
                                    <Link to={`/map/${a.Lat}/${a.Long}/${a.VehicleNo}`}>
                                        <button>View</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Point_1;
