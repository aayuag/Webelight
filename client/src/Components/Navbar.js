import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  let token = localStorage.getItem('authorization')
  
  const state=useSelector((state)=>state.handleCart)
  const history=useNavigate()

  const Loggedout=()=>{
    return(
      <>
        <a onClick={()=>history("/login")} className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i> Login
              </a>
              <a onClick={()=>history("/register")} className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i> Register
              </a>
      </>
    )
  }
  
  const handleLogout = ()=> {
    // console.log("entered in logout")
    localStorage.setItem("authorization", "");
    window.location.reload(false);
    
    
    }
  const Loggedin=()=>{
    return(
    <>
    <a onClick={()=>history("/cart")} className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart  me-1"></i> Cart ({state.length})
              </a>
  <a onClick={handleLogout} className="btn btn-outline-dark ms-2">
              <i className="fa fa-sign-out  me-1"></i> Logout
              </a>
    </>
    )
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" onClick={()=>history("/")}>Ecommerce</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={()=>history("/")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>history("/products")}>Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>history("/about")}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={()=>history("/contact")}>Contact</a>
              </li>
            </ul>
            
            <div className="buttons">
            {
              token.length ? <Loggedin/> : <Loggedout/>
            }
              
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar