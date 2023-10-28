import React from 'react'
import { json, redirect } from 'react-router-dom'
import AuthForm from '../components/AuthForm'

const AuthenticationPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-sky-950 text-white'>
      <AuthForm />
    </div>
  )
}

export const action = async ({request}) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if(mode !== 'login' && mode !== 'register') {
    throw json({message: "Unsupported mode"}, {status: 422})
  }

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  if (mode === 'register') {
    authData.name = data.get('name')
  }

  const response = await fetch('https://faithful-dog-gear.cyclic.app/api/auth/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  })

  if(response.status === 422 || response.status === 401 || response.status === 400) {
    return response;
  }

  if(!response.ok) {
    throw json({message: "Could not authenticate user, Please try again later"}, {status: 500})
  }

  // manage token received from backend
  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/')
}

export default AuthenticationPage