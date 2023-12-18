import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddNewProduct = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [sort,setSort] = useState("")
    const [img,setImg] = useState("")
    const navigate = useNavigate()
    const handelForm =(e)=>{
        e.preventDefault();
        
        axios({
            method : "post",
            url :"https://data-male-task.onrender.com/products/",
            data : {
                name,
                price,
                sort,
                img,
            }
        })
        setTimeout(()=>{
            navigate("/admin/product")
        },2000)
    }

  return (
    <div className='text-center'>
        <h1 className='mb-5'> Add New Product</h1>
        <Form onSubmit={handelForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" 
        onChange={(e)=>setName(e.target.value)}
        value={name}
        /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price"
                onChange={(e)=>setPrice(e.target.value)}
                value={price} 
                /> 
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Img</Form.Label>
        <Form.Control type="text" placeholder="Enter Img" 
                onChange={(e)=>setImg(e.target.value)}
                value={img}
                /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sort</Form.Label>
        <Form.Control type="text" placeholder="Enter Sort"
                onChange={(e)=>setSort(e.target.value)}
                value={sort}
                />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddNewProduct