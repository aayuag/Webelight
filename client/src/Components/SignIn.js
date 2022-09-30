import React,{useState} from 'react'

import axios from 'axios'

const SignIn = () => {
    

    const [login, setLogin] = useState({email: "", password: ""})
    const [err,setErr]=useState("")
  
    const handlelogin=()=>{
        axios({
            url: "http://localhost:3001/user/login",
            method: "POST",
            headers: {
            },
            data: login
        }).then((loginData)=> {    
          localStorage.setItem("authorization", loginData.data.authToken);
          window.location.reload(false);
        }).catch((err)=> {
            alert(err.response.data)
            
        })
    }
  const handlesubmit=()=>{
     if(login.email===""){
        setErr("Please Enter Your Email")
    }else if(login.password===""){
        setErr("Please Enter Your Password")
    }else{
        handlelogin()
    }
}
  return (

    <>
    <div className="container my-5 py-0">
            <div className="row">
                <div className="col-12 mb-2">
                    <h1 className='display-6 fw-bolder text-center'>Login With Your Details</h1>
                    <hr />
                </div>
               
<div class="input-group mb-3">
<span class="input-group-text" id="inputGroup-sizing-default">Enter Your Email</span>
<input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=> {setLogin({...login, email: e.target.value})}}/>
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="inputGroup-sizing-default">Enter Your Password</span>
<input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
</div>


<button className='btn btn-outline-dark mt-3'onClick={handlesubmit}>Submit</button>
<p className='display-8 text-center py-3' style={{color:"red"}}>{err}</p>
            </div>

            </div>
</>
  )
}

export default SignIn