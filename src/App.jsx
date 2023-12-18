import React, { useEffect, useState } from 'react'
import "./App.css"
import Header from './comp/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Admin from './comp/Admin/Admin';
import Product from './comp/Admin/product/Product';
import ProductDetials from './comp/Admin/product/ProductDetials';
import AddNewProduct from './comp/Admin/product/AddNewProduct';
import Edit from './comp/Admin/product/Edit';
import ProductShop from './comp/productCart/ProductShop';
import Home from './comp/Home/Home';
import Cart from './comp/CartShop/Cart';
import Validtation from './comp/Form/Validtation';
import SignIn from './comp/sign-in/SignIn';
import Users from './comp/Admin/usersinfo/Users';
import Profile from './comp/Profile/Profile';
import ErrorPage from './comp/errorPage/ErrorPage.jsx';



const App = () => {
  const [productAdded,setProductAdded]=useState([])
  const [isLogged,setIslogged]=  useState(false)
  useEffect(()=>{
    localStorage.user ? setIslogged(true) : setIslogged(false)
  },[isLogged])

  return (
    <div>
      <Header productAdded={productAdded} isLogged={isLogged} setIslogged={setIslogged}/>
      <Routes> 
        <Route path='/' element={<Home/>}/> 
        <Route path='/*' element={<ErrorPage/>}/>
        <Route path='/admin/users' element={<Users/>}/> 
        <Route path='/signin'  element={<SignIn setIslogged={setIslogged}/>}/>
        <Route path='/admin' element={localStorage.role ==='admin'?<Admin/>:<Validtation/>}/>
        <Route path='/shop' element={<ProductShop setProductAdded={setProductAdded} productAdded={productAdded}/>}/>
        <Route path='/admin/product' element={<Product/>}/>
        <Route path='/admin/product/productdetials/:id' element={<ProductDetials/>}/>
        <Route path='/form' element={<Validtation setIslogged={setIslogged}/>}/>
        <Route path='/admin/product/edit/:id' element={<Edit/>}/>
        <Route path='/admin/product/addnewproduct' element={<AddNewProduct/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/shop/cartshop' element={<Cart productAdded={productAdded} setProductAdded={setProductAdded}/>}/>
      </Routes>
    </div>
  )
}

export default App