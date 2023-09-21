import React from 'react'

export default function Form() {
  return (
    <>
      <div className='w-100 border rounded-1 border-primary '>
        {/* Vehicle no */}
        <div className='d-flex align-items-center justify-content-around py-3'>
            <label htmlFor="v-no"><b>Vehicle No:-</b> </label>
            <input type="text" className='form-control w-50'/>

        </div>

        {/* Start Data */}
        <div className='d-flex align-items-center justify-content-around py-3'>
            <label htmlFor="v-no"><b>Start Date:-</b> </label>
            <div className='d-flex'>
            <input type="date" className='form-control me-2'  required/>
            <input type="time" className='form-control'/>
            </div>

        </div>
        {/* End Date */}
        <div className='d-flex align-items-center justify-content-around py-3'>
            <label htmlFor="v-no"><b>End Date:-</b> </label>
            <div className='d-flex'>
            <input type="date" className='form-control me-2'  required/>
            <input type="time" className='form-control'/>
            </div>

        </div>
        {/* submit */}
        <div className='text-center py-3'>
            <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </>
  )
}
