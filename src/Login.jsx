import React from 'react'
import { useState } from 'react'
import { login,logout } from './Store'
import {useDispatch ,useSelector} from 'react-redux'
function Login() {
  let[newusername,setUsername]=useState('')
  const dispatch=useDispatch()
  const username=useSelector((state)=>
     state.user.value.username
  )
  
  
  return (
    <div>
      
      {username}
      <input onChange={(e)=>setUsername(e.target.value)}></input>
      <button onClick={()=>dispatch(login({username:newusername}))}>Submit</button>
      <button onClick={()=>dispatch(logout())}>Logout</button>
      
    </div>
  )
}

export default Login
