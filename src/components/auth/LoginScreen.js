import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.ui)

  const [value, handleInputChange] = useForm({
    email: 'alberto@gmail.com',
    password: '123456'
  })

  const {email, password} = value

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLogin(email, password))
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form 
        onSubmit={handleLogin}
        className='animate__animated animate__fadeIn animate__faster'
      >
        <input
          type="email"
          placeholder='Email'
          name="email"
          autoComplete='none'
          className='auth__input'
          value={ email }
          onChange={ handleInputChange }
        />

        <input
          type="password"
          placeholder='Password'
          name="password"
          className='auth__input'
          value={ password }
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className='btn btn-primary btn-block'
          disabled= {loading}
        >
          Login
        </button>
        
        <div className='auth__socila-net'>
          <p>Login with social networks</p>

          <div
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to='/auth/register' className='links'>
          Create new account
        </Link>

      </form>
    </>
  )
}
