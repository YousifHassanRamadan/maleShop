import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import "./validation.css"
import footerLogo from "../../imgs/logo.png"
import partnerLogo1 from "../../imgs/clients/client-1.png"
import partnerLogo2 from "../../imgs/clients/client-3.png"
import partnerLogo3 from "../../imgs/clients/client-4.png"
import partnerLogo4 from "../../imgs/clients/client-5.png"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Nav from 'react-bootstrap/Nav';
import imgFooter from "../../imgs/payment.png"
import { NavLink} from 'react-router-dom';

const Validtation = () => {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [address,setAddress]=useState("")
  const [password,setPassword]=useState("")
  const [city,setCity]=useState("")
  const [img,setImg]=useState("")
  const [phone,setPhone]=useState("")
  //////////////
  const [checkFname,setCheckFname]=useState(true)
  const [checkLname,setCheckLname]=useState(true)
  const [checkEmail,setCheckEmail]=useState(true)
  const [checkAddress,setCheckAddress]=useState(true)
  const [checkCity,setCheckCity]=useState(true)
  const [checkImage,setCheckImage]=useState(true)
  const [checkPassword,setCheckPassword]=useState(true)
  const [checkPhone,setCheckPhone]=useState(true)
  ////
  const restData =()=>{
    setCheckFname(true)
    setCheckLname(true)
    setCheckPassword(true)
    setCheckEmail(true)
    setCheckAddress(true)
    setCheckCity(true)
    setCheckImage(true)
    setCheckPhone(true)
  }
  const navigate =useNavigate()
  let theRole = 'member'
  // console.log(firstName);
  const handelForm=(e)=>{
    e.preventDefault()
    console.log("hello");
    if(firstName ==="" ){
      setCheckFname(false)
    }else if(lastName ===""){
      restData()
      setCheckLname(false)
    }else if(password.length < 8){
      restData()
      setCheckPassword(false)
     }else if(email === ""){
      restData()
      setCheckEmail(false)
     }
     else if(address === ""){
      restData()
      setCheckAddress(false)
     }
     else if(city === ""){
      restData()
      setCheckCity(false)
     }
     else if(phone === ""){
      restData()
      setCheckPhone(false)
     }else if(true){
      restData()
      if(email==='yossifhassanaz9@gmail.com'){
        theRole = 'admin'
        setTimeout(()=>{
        navigate("/signin")
      },2000)
      axios({
        method : "post",
        url :"https://data-male-users.onrender.com/users",
        data : {
          firstName,
          lastName,
          email,
          address,
          password,
          city,
          img,
          phone,
          theRole
        }
    })
      }else{
        theRole ='member'
        setTimeout(()=>{
        navigate("/signin")
      },2000)
      axios({
        method : "post",
        url :"https://data-male-users.onrender.com/users",
        data : {
          firstName,
          lastName,
          email,
          address,
          password,
          city,
          img,
          phone,
          theRole
        }
    })
      }
     }
  }
//|| firstName.startsWith('$'||"("||"#"||"%"||")")
  return (
    <div className='bg-dark-subtle pt-5'>
        <div className="container">
          <div className="d-flex justify-content-center">
          <Form onSubmit={handelForm} className='w-50'>
       <div className="fNameAndLast d-flex justify-content-between editFlexWrap">
       <Form.Group className="mb-3 editInput" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'>{checkFname? "First Name" : <p className='text-danger'>Invalid Name</p> }  </Form.Label>
        <Form.Control value={firstName} className='editInput' onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="Enter Your First Name" />
        </Form.Group>
       <Form.Group className="mb-3 editInput" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'>{checkLname? "Last Name" : <p className='text-danger'>Invalid Name</p> }</Form.Label>
        <Form.Control value={lastName}  onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Enter Your Last Name" />
        </Form.Group>
       </div>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'>{checkEmail? "Email " : <p className='text-danger'>Invalid Email</p> } </Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
        </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'>{checkAddress? "Address" : <p className='text-danger'>Invalid Address</p> }  </Form.Label>
        <Form.Control value={address} onChange={(e)=>setAddress(e.target.value)}  type="text" placeholder="Enter Your address" />
        </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'>{checkPassword? "Password" : <p className='text-danger'>Invalid Password</p> } </Form.Label>
        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
        </Form.Group>
        <div className="fNameAndLast d-flex justify-content-between editFlexWrap">
       <Form.Group className="mb-3 editInput" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'>{checkCity? "City" : <p className='text-danger'>Invalid City</p> } </Form.Label>
        <Form.Control value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Enter Your City" />
        </Form.Group>
       <Form.Group className="mb-3 editInput" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'> {checkPhone? "Phone Number" : <p className='text-danger'>Phone Number </p> }</Form.Label>
        <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Enter Your Phone Number" />
        </Form.Group>
       </div>
       <div className=" d-flex justify-content-between mt-5">
       <Button variant="primary"className='displayBtn' type='submit'>Submit</Button>
       <Nav.Link as={NavLink} to={"/signin"} className='editTextColor fs-4'>Sign In ?</Nav.Link>
       </div>
    </Form>
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
  )
}

export default Validtation