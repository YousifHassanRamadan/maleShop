import React from 'react'
import "./admin.css"
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';


const Admin = () => {
  return (
    <div>
      <Sidebar className='w-100 text-center'>
      <Menu>
        <MenuItem active>
        <Link to="/admin/product" className='editTextDicor fs-5 '> <MdOutlineProductionQuantityLimits className='editTextDicor fs-5 me-1 '  />Product </Link> 
        </MenuItem> 
        <MenuItem>
        <Link to="/admin/users" className='editTextDicor'> <FaUserGear className='editTextDicor fs-5 me-1' /> Users</Link>
        </MenuItem>
      </Menu>
    </Sidebar>
    </div>
  )
}

export default Admin