import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import "../Form/validation.css"
import footerLogo from "../../imgs/logo.png"
import partnerLogo1 from "../../imgs/clients/client-1.png"
import partnerLogo2 from "../../imgs/clients/client-3.png"
import partnerLogo3 from "../../imgs/clients/client-4.png"
import partnerLogo4 from "../../imgs/clients/client-5.png"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Nav from 'react-bootstrap/Nav';
import { NavLink} from 'react-router-dom';
import"./sign.css"
import imgFooter from "../../imgs/payment.png"

const SignIn = ({setIslogged}) => {
  const [signInEmail,setSignInEmail]=useState("")
  const [password,setPassword]=useState("")
  const [dataUsers,setData]=useState("")
  //////////////
  const [checkFSignInEmail,setCheckSignInEmail]=useState(true)
  const [checkPassword,setCheckPassword]=useState(true)
  ///////////
  useEffect(()=>{
    axios({
        method : "get",
        url :"https://data-male-users.onrender.com/users",
    }).then((data)=>{setData(data.data)})
  },[])
  console.log(dataUsers);
  const restData =()=>{
    setCheckSignInEmail(true)
    setCheckPassword(true)
  }
  const navigate =useNavigate()
  // console.log(firstName);
  const handelForm=(e)=>{
    e.preventDefault()
    // console.log("hello");
    if(signInEmail ===""){
        setCheckSignInEmail(false)
    }
    else if(password.length < 8){
      restData()
      setCheckPassword(false)
     }
     else if(true){
      restData()
      const database = dataUsers.find((userInfo)=>{
        return  signInEmail === userInfo.email
      })
      if(database){
        if(password !== database.password){
          setCheckPassword(false)
        }
        else{
          setCheckPassword(true)
          setIslogged(true)
          localStorage.role = database.theRole
          localStorage.user = database.firstName
          localStorage.email = signInEmail
          setTimeout(()=>{
            navigate("/")
          },[])
        }
      }
      else{
        setCheckSignInEmail(false)
      }
     }
  }
//|| firstName.startsWith('$'||"("||"#"||"%"||")")
  return (
    <div className='bg-dark-subtle editWidthSignIn pt-5'>
        <div className="container editContainer">
          <div className="d-flex justify-content-center editWidthForm">
          <Form onSubmit={handelForm} className='w-50'>
       <div className="fNameAndLast d-flex justify-content-between">
       <Form.Group className="mb-3 editUserWidth" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'>{checkFSignInEmail? "Enter Your Email" : <p className='text-danger'>Invalid Email</p> }  </Form.Label>
        <Form.Control value={signInEmail} onChange={(e)=>setSignInEmail(e.target.value)} type="text" placeholder="Enter Your First Name" />
        </Form.Group>
       </div>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fs-5 fw-bold'>{checkPassword? "Password" : <p className='text-danger'>Invalid Password</p> } </Form.Label>
        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
        </Form.Group>
       <div className=" d-flex justify-content-between mt-5">
       <Nav.Link as={NavLink} to={"/form"} className='text-light fs-4 editTextCreate'>Create Account ?</Nav.Link>
       <Button variant="primary" className='displayBtn' type='submit'>Submit</Button>
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

export default SignIn