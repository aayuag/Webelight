import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const [err,setErr]=useState("")
  const history=useNavigate()

    const handlesignin=()=>{
        history("/signin")
      }
    const handleregister=()=>{
        fetch("http://localhost:3001/user/register", {
        method: "post",
        body: JSON.stringify({
            name,
            email,
            address,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        if(res.status===400){
            setErr("Already User Exists")
        }else{
            alert("User Successfully Added")
        }
        handlesignin()
    }).catch((err) => {
        console.log(err)
    })
    }
    const handlesubmit=()=>{
        if(name===""){
            setErr("Please Enter Your Name")
        }else if(email===""){
            setErr("Please Enter Your Email")
        }else if(password===""){
            setErr("Please Enter Your Password")
        }else if(address===""){
            setErr("Please Enter Your Address")
        }else{
            handleregister()
        }
    }
  return (
    <>
        <div className="container my-5 py-0">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h1 className='display-6 fw-bolder text-center'>Register With Us</h1>
                        <hr />
                    </div>
                    <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Your Name</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>setName(e.target.value)} />
</div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Your Email</span>
  <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>setEmail(e.target.value)}/>
</div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Your Password</span>
  <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>setPassword(e.target.value)}/>
</div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Your Address</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>setAddress(e.target.value)}/>
</div>

<button className='btn btn-outline-dark mt-3'onClick={handlesubmit}>Submit</button>
<p className='display-8 text-center py-3' style={{color:"red"}}>{err}</p>
                </div>

                </div>
    </>
  )
}

export default Signup