import React from 'react'
import {Link} from 'react-router-dom'
let Navbar = ()=>{
    return(
        <>
         <nav className=' bg-primary w-100 py-2'>

            {/* flex start */}
            <div className='d-flex w-100 p-2 justify-content-between align-items-center'>


            {/* Logo */}
            <div className="logo bg-white fs-4 px-3 rounded">
                <span className='text-primary fw-medium '>PAPL</span> <span>Project</span>
            </div>
 
                {/* Nav Links start */}
            <div className='w-50'>
                <ul className='d-flex list-unstyled justify-content-evenly align-items-center mb-0'>
                    <li className=''>
                        <Link className='text-dark py-2 px-1 text-decoration-none text-white fw-medium fs-5 nav-btn rounded-1'>Dashboard</Link>
                    </li>
                    <li className=''>
                        <Link className='text-dark py-2 px-1 text-decoration-none text-white fw-medium fs-5 nav-btn rounded-1'>Point 1</Link>
                    </li>
                    <li className=''>
                        <Link className='nav-btn rounded-1 py-2 px-1 text-dark text-decoration-none text-white fw-medium fs-5'>Point 2</Link>
                    </li>
                    <li className=''>
                        <Link className='nav-btn rounded-1 py-2 px-1 text-dark text-decoration-none text-white fw-medium fs-5'>Point 3</Link>
                    </li>
                </ul>
            </div>

            </div>
            {/* flex end */}


         </nav>
        </>
    )
};

export default Navbar;