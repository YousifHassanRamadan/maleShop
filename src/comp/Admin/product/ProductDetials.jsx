import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios  from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductDetials = () => {
    const {id} = useParams()
    const [dataClicekd,setDataClicekd] =useState(null)
    useEffect(()=>{
        axios({
            method : "get",
            url : `https://data-male-task.onrender.com/products/${id}`,
    }).then((data)=>{setDataClicekd(data.data);;})
    },[])
  return (
    <div className='text-center '>
        <h1 className='editTextColor mt-5'>ProductDetials</h1>
        {dataClicekd? <div className='d-flex justify-content-center '>
        <Card className='col-lg-3 col-md-6 col-sm-12 mt-lg-5 mt-md-3 mt-sm-5 editCartBody mt-5' style={{ width: '22rem' }}>
        <Card.Img variant="top" src={`${dataClicekd.img}`} width={400} height={400} />
        <Card.Body>
          <Card.Title className='editTextColor'> {dataClicekd.name}</Card.Title>
          <Card.Text className='editTextColor'>
            <h1> ${dataClicekd.price}</h1>
            <h1 className='mt-3'>{dataClicekd.sort}</h1>
          </Card.Text>
        </Card.Body>
      </Card>
        </div>:<h1>Loading.......</h1>}
    </div>
  )
}

export default ProductDetials