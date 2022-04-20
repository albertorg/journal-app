import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form>
        <input
          type="text"
          placeholder='Name'
          name="name"
          autoComplete='none'
          className='auth__input'
        />

        <input
          type="email"
          placeholder='Email'
          name="email"
          autoComplete='none'
          className='auth__input'
        />

        <input
          type="password"
          placeholder='Password'
          name="password"
          className='auth__input'
        />

        <input
          type="password"
          placeholder='Repeat password'
          name="password2"
          className='auth__input'
        />

        <button
          type="submit"
          className='btn btn-primary btn-block mb-5'
        >
          Register
        </button>
        

        <Link to='/auth/login' className='links mt-5'>
          Already registered?
        </Link>

      </form>
    </>
  )
}
