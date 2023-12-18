import "./edit.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

  const [name , setName] = useState("")
  const [price , setPrice] = useState("")
  const [img , setImg] = useState("")
  const [sort , setSort] = useState("")
  const {id} = useParams()
  const navigate =useNavigate()
  const handelForm = (e)=>{
    e.preventDefault();
        
    axios({
        method : "put",
        url :`https://data-male-task.onrender.com/products/${id}`,
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
  useEffect(()=>{
    axios({
      method : "get",
      url :`https://data-male-task.onrender.com/products/${id}`
    }).then((data)=>{setName(data.data.name);
      setPrice(data.data.price);
      setImg(data.data.img);
      setSort(data.data.sort)})
  },[])
  return (
    <div className='text-center'>
        <h1 className='mb-5 mt-4 editTextColor'> Edit Product</h1>
        <Form onSubmit={handelForm}>
        <Form.Group className="mb-3" controlId="formBasic321Email">
        <Form.Label className="editTextColor">Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicE112mail">
        <Form.Label className="editTextColor">Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price" 
        value={price}
        onChange={(e)=>{setPrice(e.target.value)}}
                /> 
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEma3il">
        <Form.Label className="editTextColor">Img</Form.Label>
        <Form.Control type="text" placeholder="Enter Img"
        value={img}
        onChange={(e)=>{setImg(e.target.value)}} 
                /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswo2rd">
        <Form.Label className="editTextColor">Sort</Form.Label>
        <Form.Control type="text" placeholder="Enter Sort"
        value={sort}
        onChange={(e)=>{setSort(e.target.value)}}
                />
      </Form.Group>
      <Button variant="primary" className='editBtnColor' type="submit">
        Submit
      </Button>
    </Form>
    </div>
)}

export default Edit