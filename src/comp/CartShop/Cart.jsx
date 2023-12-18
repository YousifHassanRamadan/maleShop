import React, { useEffect, useState } from 'react'
import partnerLogo1 from "../../imgs/clients/client-1.png"
import partnerLogo2 from "../../imgs/clients/client-3.png"
import partnerLogo3 from "../../imgs/clients/client-4.png"
import partnerLogo4 from "../../imgs/clients/client-5.png"
import footerLogo from "../../imgs/logo.png"
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import "./cartitem.css"
import { IoMdCash } from "react-icons/io";
import imgFooter from "../../imgs/payment.png"
const Cart = ({productAdded,setProductAdded}) => {
    // console.log(productAdded);
    let sum = 0
    const sumPrice = productAdded.map((item)=>{
      return sum += (+item.price *item.counter)
    })
    const inc = (productClicked)=>{
      const isExist = productAdded.find((item)=>{
        return productClicked.id === item.id
      })
      if(isExist){ 
        setProductAdded(productAdded.map((item)=>{
          return item.id===productClicked.id?{...isExist , counter : isExist.counter+1}:item
        }))
      }
    }
    const dec = (productClicked)=>{
      const isExist = productAdded.find((item)=>{
        return productClicked.id === item.id
      })
      if(isExist){ 
        setProductAdded(productAdded.map((item)=>{
          return item.id===productClicked.id?{...isExist , counter : isExist.counter === 0 ? 0 : isExist.counter-1}:item
        }))
      }
    }
    const deleteItem =(item)=>{
      console.log(item);
      console.log("gello");
      const resultTheFilter = productAdded.filter((itemObj)=>{
        return itemObj.id  !== item.id
      })
      setProductAdded(resultTheFilter)
    }
  return (
    <div>
        <div className="container">
          <div className="d-flex justify-content-between editFlexWrap ">
            <div className="section1 w-75 ">
              {productAdded.map((item)=>(
                <div className="div ">
                  <div className='container d-flex mb-5 mt-5 justify-content-around editFlexWrap'>
                  <img src={`${item.img}`} width={150} height={150}/>
                  <div className="nameItem pt-5">
                  <p>{item.name}</p>
                  </div>
                  <Button variant="primary editBtn mt-5" onClick={()=>inc(item)} >+</Button>
                  <p className='mt-5'>{item.counter}</p>
                  <Button variant="danger editBtn mt-5" onClick={()=>dec(item)}>-</Button>
                  <p className='mt-5'>{item.price * item.counter}$</p>
                  <MdDelete className='mt-5 fs-4' onClick={()=>deleteItem(item)} />
                </div>
                <hr/>
                </div>
              ))}
            </div>
            <div className="section2 w-25 container h-25 mt-3 ms-3 rounded editColor">
              <h1 className='text-center fs-2 '> Cart Total </h1>
              <div className="content d-flex justify-content-between ">
                <p>{sum} $</p>
                <IoMdCash className='fs-2' />
              </div>
              <div className="d-flex justify-content-center mb-3">
              <Button variant="secondary w-75">Pay</Button>
              </div>
            </div>
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
    </div>
  )
}

export default Cart