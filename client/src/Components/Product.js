import React, { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {addCart} from '../redux/action/index'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const history=useNavigate()
    const dispatch=useDispatch()
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }
    const handleroute=()=>{
        history("/cart")
    }
    const {id}=useParams()
    const [product,setProduct]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        const getProduct=async()=>{
            setLoading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
        }
      getProduct()
    }, [])
    
    const Loading=()=>{
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                </div>
            </>
        )
    }

    const ShowProduct=()=>{
        return(
            <>
    <div className="col-md-6">
        <img src={product.image} alt={product.title} height='400px' width='400px'></img>
    </div>
    <div className="col-md-6">
        <h4 className='text-uppercase text-black-50'>
            {product.category}
        </h4>
        <h1 className='dissplay-5'>{product.title}</h1>
        <p className='lead fw-bolder'>
            Rating {product.rating && product.rating.rate}
            <i className='fa fa-star'></i>
        </p>
        <h3 className='display-6 fw-bold my-4'>
        <i class="fa fa-inr"></i> {product.price}
        </h3>
        <p className='lead'>{product.description}</p>
        <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>
            Add to Cart
        </button>
        <a className='btn btn-dark ms-2 px-3 py-2' onClick={handleroute}>
            Go to Cart
        </a>
    </div>
            </>
        )
    }

  return (
    <>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </>
  )
}

export default Product