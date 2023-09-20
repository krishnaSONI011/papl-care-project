const express =require('express')
const axios = require('axios')
const cors =require('cors')
let app = express()

app.use(cors())
app.use(express.json()); 

app.listen(8080, ()=>{
    console.log("server start")
})
app.get("/",async (req,res)=>{
    try{
        let r = await axios.get("http://vehicletrack.biz/api/companyvehiclelatestinfo?token=C_3BD0B0A02B")

        return res.status(r.status).json(r.data)
    }catch(err){
        console.error(err)
    }
})