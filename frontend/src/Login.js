import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate,} from 'react-router-dom'
import { auth } from './firebase';
function Login() {
  const [history, setHistory] = useNavigate();//Earlier in react prior to v6 it was useHistory
                                // Basically what it does is we can send the user to the homepage after he registers.
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  // so basically we made the frontend first then we made some functionality in the form of this email and password usestate.. and we got there value then we moved to signin and register button


  const signIn = e => {
  e.preventDefault()// This prevents the refreshing of the page

  //DO some fancy firebase login shittttt...
  }


  const register = e => {
    e.preventDefault()
    // do some fancy firebase register shiittt..

    auth
        .createUserWithEmailAndPassword(email,password)//This line creates a user and gives us back the "auth". from built in
        .then((auth)=>{
          // It runs if it successfully registers the email and pass
            console.log(auth);
            if(auth){
              history.push("/")
            }
        })
        .catch((error)=>{
          alert(error.message);
        })
  }

  return (
    <div className='login'>
        <Link to="/">
        <img className='login_logo' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" />
        </Link>
        
        <div className='login_container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input className="mail" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                {/* SO we just basicaly mapped the value as email and then made a onchange event which triggers after every change then that event sets the value of email as the changed value so we are just taking in the emails*/}
                <h5>Password</h5>
                <input className='mail' type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                <br/>
                <button type="submit" className='login_button' onClick={signIn}>Sign-In</button>
            </form>
            <p className='terms'>BY signing-in you agree to Amazon Clone's terms and Conditions of use & sale. Please see our PRivac notice, our cookies notic and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='register_button'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login