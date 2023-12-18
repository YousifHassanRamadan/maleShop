import React from 'react'
import"./errorPage.css"
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    const backToHome = ()=>{
        navigate("/")
    }
  return (
    <div>
        <div className="container ">
            <div className="text-center mt-5">
            <h1>Page Not Found</h1>
            </div>
            <div className="btn d-flex  justify-content-center mt-5">
            <Button variant="primary" className='displayBtn' onClick={()=>backToHome()}>Back To Home Page ?</Button>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage