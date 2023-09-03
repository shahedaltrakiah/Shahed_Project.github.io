import React, { useState } from 'react'
import Axios from "axios";
import { useHistory,Link } from "react-router-dom";

function Login() {
 
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [loginStatus, setLoginStatus] = useState("");
 
   
  let n=useHistory()

   const getData = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      pass: pass,
    }).then((response) => {
     if(response.data[0].email=== email){
        n.push('/Home/' + email)
     }
     else{
      setLoginStatus('error')
     }
    
    });
  };

  return (
    <div className='container '>
        <div className=' d-flex flex-column border border-primary w-50 mx-auto  
        justify-content-center p-5 rounded-lg mt-5 '>

            <img src='logo512.png' align-items= 'center' style={{ width: '200px', height: '150px' }}></img>
                <input type="text" className="form-control mt-4" 
                placeholder='Enter Your Email' onChange={(e) => {setEmail(e.target.value);}}/>

                <input type="text" 
                className="form-control mt-3" 
                placeholder='Enter Your Password' onChange={(e) => {setPass(e.target.value);}}/>

                <Link to="/" className='mt-3'>Forget Your Password?</Link>

                <button onClick={getData} className='btn btn-primary mt-4'>LOGIN</button>
                <h1>{loginStatus}</h1>
        </div>
    </div>
  )
}

export default Login