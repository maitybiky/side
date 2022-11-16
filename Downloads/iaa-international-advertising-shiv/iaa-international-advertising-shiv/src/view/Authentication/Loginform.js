import React, { useState } from 'react'
import HttpClient from '../../utils/HttpClient'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useDispatch } from 'react-redux';
import { setuser } from '../../Redux/reducer/User';


export default function Loginform() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const LoginHandle = async () => {
if(email !="" && password !=""){
    let data = {
        email,
        password
    }
    let result = await HttpClient.requestData("login", "POST", data)
    console.log(result)
    if (result && result.status) {
        toast.success("Login successfully")
        dispatch(setuser(result.data))
        reactLocalStorage.setObject("userData", result.data)
        reactLocalStorage.setObject("loginStatus", true)
        reactLocalStorage.setObject("token",result.data.token)
        setTimeout(() => {
            navigate("/")
            setEmail("")
            setPassword("")
        }, 2000)
    }
    else{
        toast.error(result.error)
    }
}
else{
    toast.error("All feilds are required")
}
       
    }
    return (
        <div>
            <ToastContainer />
            <section className="login-form">
                <div className='container'>
                    <div className='login-pg'>

                        <form>
                            <h1>
                                Login
                            </h1>
                            <hr></hr>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username or Email</label>
                                <input type="email"
                                    value={email}
                                    onChange={(val) => setEmail(val.target.value)}
                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password"
                                    value={password}
                                    onChange={(val) => setPassword(val.target.value)}
                                    className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>

                        </form>
                        <button type="submit" className="btn login-btn" onClick={LoginHandle}>Login</button>
                    </div>
                    <div className='login-para'>
                        <p>Forgot your password? Forgot your username? Contact us</p>
                        <p>Don't have an account yet? Become a member.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}
