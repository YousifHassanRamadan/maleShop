import React, { useEffect, useState } from 'react'
import "./home.css"
import "../productCart/productShop.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import banner_1 from "..//../imgs/banner/banner-1.jpg"
import banner_2 from "..//../imgs/banner/banner-2.jpg"
import banner_3 from "..//../imgs/banner/banner-3.jpg"
import footerLogo from "../../imgs/logo.png"
import partnerLogo1 from "../../imgs/clients/client-1.png"
import partnerLogo2 from "../../imgs/clients/client-3.png"
import partnerLogo3 from "../../imgs/clients/client-4.png"
import partnerLogo4 from "../../imgs/clients/client-5.png"
import imgFooter from "../../imgs/payment.png"
import { useNavigate } from 'react-router-dom';
import imgBackGround from "../../hero-1-removebg-preview.png"

const Home = () => {
  console.log(localStorage.email);
  const [dataWillMap ,setDataWillMap] = useState([])
  const [checkData ,setcheckData] = useState(null)
  const navigateToShop = useNavigate("")
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
  const switchToShop =()=>{
    navigateToShop("/shop")
  }

  const updatedData = dataWillMap.slice(0,3)
  return (
    <div className='bodyHome' >
      <div className="div w-100 editbg">
      <div className="backGroundHome d-flex justify-content-between   mb-5">
        <div className="text editSize pt-5 ps-5">
        <p className='pt-4 pb-3 editColorSummerCollections fs-2 fw-semibold editPadding'>summer collection</p>
          <h1> Fall - Winter</h1>
          <h1 className='pt-4 pb-4 editPadding'> Collections 2023</h1>
          <button class="cssbuttons-io-button" onClick={switchToShop}>
          Shop Now
      <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
          </button>
        </div>
        <img className='editImg' src={`${imgBackGround}`}/>
        </div>
      </div>
      <div className="container">
        <div className="firstCard d-flex justify-content-end">
          <div className="text align-self-center">
            <p className='fs-2'>Clothing</p>
            <h1>Collections 2023</h1>
            <p className='underLineShopNow fs-4 'onClick={switchToShop}>Shop Now</p>
          </div>
          <div className="img">
            <img src={banner_1} className='editWidthImg' width="100%" height="100%"/>
          </div>
        </div>
        <div className="firstCard d-flex justify-content-start mt-4 ">
          <div className="text align-self-center">
            <p className='fs-2'>Accessories</p>
            <p className='underLineShopNow fs-4 'onClick={switchToShop}>Shop Now</p>
          </div>
          <div className="img">
            <img src={banner_2} className='editWidthImg' width="100%" height="100%"/>
          </div>
        </div>
        <div className="firstCard d-flex justify-content-end mt-4 pb-5">
          <div className="text align-self-center">
            <p className='fs-2'>Shoesing Spring</p>
            <h1> 2023</h1>
            <p className='underLineShopNow fs-4 'onClick={switchToShop}>Shop Now</p>
          </div>
          <div className="img">
            <img src={banner_3} className='editWidthImg' width="100%" height="100%"/>
          </div>
        </div>
      </div>
      <div className="freeShiping mb-5">
        <div className="word">
        <h1 className='edith1 d-flex justify-content-center pt-3'>free Shiping , 30-days return or refund guarantee.</h1>
        </div>
      </div>
      <div className="container mb-5">
        {checkData ?
        <div className="row editCardWidth gap-3 justify-content-between">
        {updatedData.map((product,id)=>(
        <Card className='col-lg-3 col-md-6 col-sm-12 mt-lg-5 mt-md-3 mt-sm-5 editCartBody' style={{ width: '22rem' }}>
        <Card.Img variant="top" src={`${product.img}`} width={400} height={400} />
        <Card.Body>
          <Card.Title> {product.name}</Card.Title>
          <Card.Text>
            <h1> ${product.price}</h1>
          </Card.Text>
          <Button variant="primary" className='displayBtn' onClick={switchToShop}>Shop Now</Button>
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

export default Home