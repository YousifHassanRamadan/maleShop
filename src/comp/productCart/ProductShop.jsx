
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./productShop.css";
import footerLogo from "../../imgs/logo.png"
import partnerLogo1 from "../../imgs/clients/client-1.png"
import partnerLogo2 from "../../imgs/clients/client-3.png"
import partnerLogo3 from "../../imgs/clients/client-4.png"
import partnerLogo4 from "../../imgs/clients/client-5.png"
import imgFooter from "../../imgs/payment.png"

const ProductShop = ({setProductAdded,productAdded}) => {
  const [dataWillMap ,setDataWillMap] = useState([])
  const [checkData ,setcheckData] = useState(null)
  useEffect(()=>{
    fetch('https://data-male-task.onrender.com/products/')
    .then(data => {
    return data.json();
    })
    .then(dataFetch => {
      setDataWillMap(dataFetch);
      setcheckData(true)
    });
  },[])
  const addToCart=(product)=>{
    const isExist = productAdded.find((item)=>{
      return product.id === item.id
    })
    if(isExist){ 
      setProductAdded(productAdded.map((item)=>{
        return item.id===product.id?{...isExist , counter : isExist.counter+1}:item
      }))
    }else{
      setProductAdded([...productAdded,{...product,counter:1}])
    }
    console.log(productAdded);
  }
  return (
    <div>
      <div className="container">
        {checkData ?
        <div className="row gap-3 justify-content-between">
        {dataWillMap.map((product)=>(
        <Card className='col-lg-3 col-md-6 col-sm-12 mt-lg-5 mt-md-3 mt-sm-5 editCartBody mt-5' style={{ width: '22rem' }}>
        <Card.Img variant="top" src={`${product.img}`} width={400} height={400} />
        <Card.Body>
          <Card.Title> {product.name}</Card.Title>
          <Card.Text>
            <h1> ${product.price}</h1>
          </Card.Text>
          <Button variant="primary" className='displayBtn' onClick={()=>addToCart(product)}>Add to Cart</Button>
        </Card.Body>
      </Card>
      ))}
        </div>: 
        <div className="d-flex justify-content-center mt-5">
          <div class="loader">
    <span class="loader-text ">loading</span>
      <span class="load"></span>
  </div>
        </div>
}
      </div>
      <div className="container   mt-5">
  <footer className="py-5">
    <div className="row justify-content-evenly editFooter">
      <div className="col-6 col-md-2 mb-3">
        <h5><img src={`${footerLogo}`}/></h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary">the customer is at the heart of our unique business model</p></li>
          <li><img src={imgFooter}/></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3 editShopingMargin">
        <h5>Shoping</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shop</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='ms-4'>Partner</h5>
        <ul className="nav flex-row justify-content-evenly  ">
          <li className="nav-item "><img src={`${partnerLogo1}`}/></li>
          <li className="nav-item "><img src={`${partnerLogo2}`}/></li>
          <li className="nav-item mt-4 "><img src={`${partnerLogo3}`}/></li>
          <li className="nav-item mt-2 "><img src={`${partnerLogo4}`}/></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3 w-25">
        <form>
          <h5 className='text-body-secondary'>new letter</h5>
          <p className='text-body-secondary'>be the first to know about new arrivals look books , sales and promos</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2 flex-wrap" >
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary displayBtn" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-row flex-sm-row justify-content-center py-4 my-4 border-top editFooter">
      <p className=''> 2023 Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</div>
    </div>
  )
}

export default ProductShop