import React from 'react'
import  {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {addCart,delCart} from '../redux/action/index'
import axios from 'axios'

const Cart = () => {
    const order=useSelector((state)=>state.handleCart)
    const dispatch=useDispatch()
    const handleincrement=(product)=>{
        dispatch(addCart(product))
    }
    const handledecrement=(product)=>{
        dispatch(delCart(product))
    }
    let token=localStorage.getItem('authorization')
    const handleorder=()=>{
        axios({
            url: "http://localhost:3001/order/add",
            method: "POST",
            headers: {
                authorization:token
            },
            data: order
        }).then((loginData)=> {    
         
          window.location.reload(false);
        }).catch((err)=> {
            alert(err.response.data)
            
        })
    }
    // console.log(state)
  return (
    <>
    {
        order.map((product)=>{
            return(
                <div className="container py-5">
            <div className="row ms-4">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width='180px' />
                </div>
                <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className='lead fw-fold'>
                    {product.qty} X <i class="fa fa-inr"></i> {product.price} = <i class="fa fa-inr"></i> {product.qty*product.price}
                </p>
                <button className='btn btn-outline-dark me-4' onClick={()=>handleincrement(product)}>
                    <i className='fa fa-plus'></i>
                </button>
                <button className='btn btn-outline-dark ' onClick={()=>handledecrement(product)}>
                    <i className='fa fa-minus'></i>
                </button>
                </div>
            </div>
        </div>
            )
        })
    }
    <div className='container text-center'>
    <button className='btn btn-outline-dark ' onClick={handleorder}>
                    Checkout
                </button>
    </div>
    
    </>
  )
}

export default Cart