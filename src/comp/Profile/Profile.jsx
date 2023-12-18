import React, { useEffect, useState } from 'react'
import "./profile.css"

const Profile = () => {
  const [dataWillMap ,setDataWillMap] = useState([])

  useEffect(()=>{
    fetch('https://data-male-users.onrender.com/users')
    .then(data => {
    return data.json();
    })
    .then(dataFetch => {
      setDataWillMap(dataFetch);
    });
  },[])
  const database = dataWillMap.find((userInfo)=>{
    return  localStorage.email === userInfo.email
  })

  console.log(database);
  return (
    <div>
      <div className="container d-flex justify-content-between flex-wrap editPaddingProfile  ">
        <div className="firstSection  mt-5 editColorProfileText ">
          {database?(<h1 className='fs-2  mb-2'>First Name : {database.firstName} </h1>):(<h1 className='fs-2'>First Name : loading.... </h1>)}
          {database?(<h1 className='fs-2 mt-5 mb-2'>Email : {database.email} </h1>):(<h1 className='fs-2'>Email : loading.... </h1>)}
          {database?(<h1 className='fs-2 mt-5'>Phone Number : {database.phone} </h1>):(<h1 className='fs-2'>Phone Number : loading.... </h1>)}
        </div>
        <div className="secSection  mt-5 editColorProfileText ">
        {database?(<h1 className='fs-2  mb-2'>Last Name : {database.lastName} </h1>):(<h1 className='fs-2'>Last Name : loading.... </h1>)}
        {database?(<h1 className='fs-2 mt-5 mb-2'>Password : {database.password} </h1>):(<h1 className='fs-2'>Password : loading.... </h1>)}
        {database?(<h1 className='fs-2 mt-5 mb-2'>City : {database.city} </h1>):(<h1 className='fs-2'> City : loading.... </h1>)}
        </div>
      </div>
    </div>
  )
}

export default Profile





