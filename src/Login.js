import { Button } from '@mui/material'
import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import {provider, auth} from './firebase'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
function Login() {
    const dispatch = useDispatch()
    const SignIn = () => {
        signInWithPopup(auth, provider)
        .then(({user})=>{
          dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL

          }))
        }).catch(error => alert(error.message))
    }
  return (
    <div className="login">
        <div className="login__container">
            <img src="https://9to5google.com/wp-content/uploads/sites/4/2020/10/google_workspace_icons_1.jpg?quality=82&strip=all" alt="" />
            

        <Button variant='contained' color="primary" onClick={SignIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login