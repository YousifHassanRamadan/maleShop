import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import "./Product.css"
import  axios  from 'axios';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'

const Product = () => {
    const [dataProducts,setDataProducts] = useState([])
    const [didDataCome ,setDidDataCome] = useState(false)
    useEffect(()=>{
        axios({
            method : "get",
            url : "https://data-male-task.onrender.com/products",
        }).then((data)=>{setDataProducts(data.data);setDidDataCome(true)})
    },[didDataCome])
    const deleteItem = (product)=>{
      Swal.fire({
        title: `Do you want to delete " ${product.name} "?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Save',
        denyButtonText: `Delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          console.log(result.isConfirmed);
        } else if (result.isDenied) {
          Swal.fire('This product is deleted', '', 'success')
          console.log(result.isConfirmed);
          axios({
            method : "delete",
            url :`https://data-male-task.onrender.com/products/${product.id}`
          })
          setDidDataCome(!didDataCome)
        }
      })
      console.log(product);
      

      
    }
  return (
    <div className='container'>
        <div className="text d-flex justify-content-center mt-4">
        <h1 className='editTextColor'>Product</h1>
        </div>
        <div className="btn d-flex justify-content-center mt-4">
        <NavLink to={`/admin/product/addnewproduct`}><Button variant="danger">Add New Product</Button></NavLink>
        </div>
        <div className="text-center">
        {didDataCome ? <div className="d-flex flex-column justify-content-center mt-5 w-100">
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>id</th>
        <th>Img</th>
        <th>Price</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
    {dataProducts.map((product)=>(
        <tr key={product.id}>
        <td>{product.id}</td>
        <td><img src={product.img} width={"35%"} className='editImgWidth' /></td>
        <td>{product.price}$</td>
        <td className='w-25'>
          <div className="btnss d-flex justify-content-between pt-lg-5 pt-md-5  ">
        <NavLink to={`/admin/product/productdetials/${product.id}`}><Button variant="primary"className='ms-1'>View</Button></NavLink>
        <NavLink to={`/admin/product/edit/${product.id}`}><Button variant="warning"className=' me-1 ms-1' >Edit</Button></NavLink>
        <NavLink><Button variant="danger"  onClick={()=>deleteItem(product)}>Delete</Button></NavLink>
        </div>
        </td>
        </tr>
    ))}
    </tbody>
  </Table>
        </div> : <h1>Loading.........</h1>}
        </div>

    
  </div>
  )
}

export default Product


 