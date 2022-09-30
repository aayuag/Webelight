import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const history=useNavigate()
    const [search,setSearch]=useState("")
    const [data, setData] = useState([])
    const [filterer, setFilterer] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await response.clone().json)
                setFilterer(await response.json())
                setLoading(false)
                // console.log(filterer)
            }
            return () => {
                componentMounted = false;

            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }
const filterProduct=(cat)=>{
    setSearch(cat)
}

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("")}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewellary</button>
                </div>
                {filterer.filter((product)=>{
                    if(search===""){
                        return product
                    }else if(product.title.toLowerCase().includes(search.toLowerCase()) || product.category===search){
                        return product
                    }
                }).map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div class="card h-100 text-center p-4" key={product.id}> 
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p class="card-text lead fw-bold"><i class="fa fa-inr"></i> {product.price}</p>
                                        <a onClick={()=>history(`/products/${product.id}`)} class="btn btn-outline-dark">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                    <div class="input-group mb-3">
  <input type="text" class="form-control" onChange={(e)=>setSearch(e.target.value)}  placeholder="Enter Product Name or Category to Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  
</div>


                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}

export default Products