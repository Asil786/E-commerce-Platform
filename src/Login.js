import { Message } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');        // Destructuring of Array
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                // It successfully Signed In User With Email and Password
                if(auth){
                    history.push('/')   
                }
            })
            .catch(error => alert(error,Message))
    }
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                // It successfully Created a New User With Email and Password
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error,Message))

    }

    return (
        <div className='login'>
            <Link to = "/">
              <img className="login--logo" src="https://www.citypng.com/public/uploads/preview/-11596409153ixy8eolhxq.png" alt="amazon" />
           </Link>
           <div className='login--container'>
               <h1>Sign-in</h1>
               <form>
                   <h5>Email</h5>
                   <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                   <h5>Password</h5>
                   <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                   <button type='submit' onClick={signIn} className='login--signButton'>Sign In</button>
               </form>
               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
               <button type='submit' onClick={register} className='login--registerButton'>Create your Amazon Account</button>
           </div>
           <div className='information--amazon'>
               <p> Conditions of Use &emsp;&emsp;&nbsp;</p>
               <p>Privacy Notice &nbsp;</p>
               <p> &emsp;&emsp;Help </p>
           </div>
            <h5 className='amazon--date'>© 1996-2022, Amazon.com, Inc. or its affiliates</h5> 
        </div>
    )
}

export default Login
