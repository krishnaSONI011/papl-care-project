import React from 'react'

export default function Form(props) {

  return (
    <>
    

    
      <div className='w-100 border rounded-1 border-primary '>
        {/* Vehicle no */}
        <div className='d-flex align-items-center justify-content-around py-3'>
            <label htmlFor="v-no"><b>Vehicle No:-</b> </label>
            <input type="text" className='form-control w-50' onChange={(e)=>{props.vehicle(e.target.value)}} required/>
            

        </div>
        <div className='text-center  text-danger'>{props.verror}</div>
        {/* Start Data */}
        <div className='d-flex align-items-center justify-content-around py-3'>
            <label htmlFor="v-no"><b>Start Date:-</b> </label>
            <div className='d-flex'>
            <input type="date" className='form-control me-2'  required onChange={(e)=>{props.startdate(e.target.value)}}/>
            <input type="time" className='form-control' onChange={(e)=>{props.starttime(e.target.value)}} required/>
            </div>

        </div>
        <div className='text-center text-danger'>{props.vsdate}</div>
        {/* End Date */}
        <div className='d-flex align-items-center justify-content-around py-3'>
            <label htmlFor="v-no"><b>End Date:-</b> </label>
            <div className='d-flex'>
            <input type="date" className='form-control me-2'  required onChange={(e)=>{props.enddate(e.target.value)}}/>
            <input type="time" className='form-control' onChange={(e)=>{props.endtime(e.target.value)}} required/>
            </div>

        </div>
        <div className='text-center text-danger'>{props.vedate}</div>
        {/* submit */}
        
      </div>
      
    </>
  )
}
