import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase';
import Login from './Login';
function Signup() {
    
    const firebase = useFirebase();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    let time = Date.now();
    return (
        <div>
            <h1>Signin</h1>
            <input type="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder='Enter Email' />
            <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} placeholder='Enter password' />
            <button onClick={() => {
                firebase.signupUserWithEamilandPassword(email, password);
                firebase.putData(`users/${time}`, { email, password })
            }}>Submit</button>
            <button onClick={firebase.signUpWithGoogle}>Signin with Google</button>
        </div>
    )
}

export default Signup;