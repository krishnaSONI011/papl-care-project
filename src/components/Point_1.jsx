import React,{useState,useEffect} from "react";
import axios from 'axios'

let Point_1 = ()=>{
    let [data,setData]= useState([]);

    useEffect(()=>{
        loadData()
    },[])

    async function loadData(){
        try{
            let res = await axios.get("http://vehicletrack.biz/api/companyvehiclelatestinfo?token=C_3BD0B0A02B");
            setData(res.data)
            console.log(data)
        }catch(err){
            console.log(err)
        }

    }
    return(
        <>

        </>
    )
}

export default Point_1;