import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const Users = () => {
  const [dataUsers,setDataUsers] = useState([])
  const [checkData , setCheckData] =useState(false)
  useEffect(()=>{
    axios({
      method : "get",
      url : `https://data-male-users.onrender.com/users`
    }).then((data)=>{setDataUsers(data.data);setCheckData(true)})
  },[])
  return (
    <div>
      <div className="container">
          {checkData ?<div className="row justify-content-evenly">
          {dataUsers.map((userIfo)=>(
        <Card className='col-lg-3 col-md-6 col-sm-12 mt-lg-5 mt-md-3 mt-sm-5 editCartBody' style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title className=' text-center '> {userIfo.theRole}</Card.Title>
          <Card.Text>
            <h1> First Name : {userIfo.firstName}</h1>
            <h1> Second Name : {userIfo.lastName}</h1>
            <h1> Email : {userIfo.email}</h1>
            <h1> Address : {userIfo.address}</h1>
            <h1> User Password : {userIfo.password}</h1>
            <h1> City : {userIfo.city}</h1>
            <h1> Phone Number :  {userIfo.phone}</h1>
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
          </div> 
          :
          <h1 className='text-center mt-5'>Loading.......</h1>}
      </div>
    </div>
  )
}

export default Users