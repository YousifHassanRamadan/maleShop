import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import {FcShop} from "react-icons/fc"
import {PiSignOutBold} from "react-icons/pi"
import "./Header.css"
import logoHeader from "../../imgs/footer-logo.png"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = ({productAdded,isLogged ,setIslogged}) => {
  const navigate = useNavigate()
  //////
  const navigate2 = useNavigate()
  //////
  const switchToCart =()=>{
    navigate("/shop/cartshop")
  }
  ////
  const switchToForm =()=>{
    navigate2("/signin")
  }
  const logOutFun =()=>{
    setIslogged(false)
      navigate2("/signin")
      localStorage.clear()
  }

  return (
    <div className='navHeader'>
    <Navbar expand="lg" className="editColorBackGround " >
    <Container>
      <Navbar.Brand href="#home" className='text-light'><img src={logoHeader}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav editNavColl">
        <Nav className="ms-auto editNav editNavColl">
          <div className="contain d-flex pt-2">
          <Nav.Link as={NavLink} to={"/"} className='text-light fs-4'>Home</Nav.Link>
          <Nav.Link as={NavLink} to={"/shop"} className='text-light fs-4'>Shop</Nav.Link>
          </div>
          <div className="contian2 d-flex ">

          <Nav.Link as={NavLink} to={"/shop/cartshop"} className='text-light fs-3'><FcShop onClick={switchToCart}/> <span class="position-absolut top-0 start-100 translate-middle badge rounded-pill bg-danger">{productAdded.length}</span></Nav.Link>
          <Dropdown>
      <Dropdown.Toggle className='editColorBackGround editBorder mt-2 editFontSz' id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu className='editColorBackGround '>
      {localStorage.role ==='admin'&&<div><NavDropdown.Item as={NavLink} to = "/admin" className='text-light editColorBackGround'>Dashboard</NavDropdown.Item>
      <NavDropdown.Divider /> </div>
      }
      
              {isLogged?(<NavDropdown.Item className='text-light editColorBackGround' onClick={logOutFun}>Log-Out</NavDropdown.Item>)
            :
            (<NavDropdown.Item as={NavLink} to={"/signin"} className='text-light editColorBackGround'><PiSignOutBold onClick={switchToForm}/> Sign in</NavDropdown.Item>)}
                          
                          {isLogged&&(<NavDropdown.Item as={NavLink} className='editColorBackGround text-light ' to={"/profile"} href="#action/3.3">Profile</NavDropdown.Item>)}
              
      </Dropdown.Menu>
    </Dropdown>
          </div>
        </Nav>


      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header