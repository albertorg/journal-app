import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeErrorAction, setErrorAction } from '../../actions/ui'
import { StartRegisterWithEmail } from '../../actions/auth'

export const RegisterScreen = () => {

  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)
  console.log(msgError)

  const [value, handleInputChange] = useForm({
    name: 'Hernando',
    email: 'nando@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = value

  const handleRegister = (e) => {
    e.preventDefault()

    if (isFormValid()) {
      dispatch(StartRegisterWithEmail(email, password, name))

    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction('Name is required'))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('Email is not valid'))
      return false
    } else if (password !== password2 || password.length < 5) {
      dispatch(setErrorAction('Password should be at least 6 character and match'))
      return false
    }

    dispatch(removeErrorAction())
    return true
  }

  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleRegister}>

        {
          msgError && 
          (
            <div className='auth__alert-error'>
              {msgError}
            </div>
          ) 
        }

        <input
          type="text"
          placeholder='Name'
          name="name"
          autoComplete='none'
          className='auth__input'
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          placeholder='Email'
          name="email"
          autoComplete='none'
          className='auth__input'
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder='Password'
          name="password"
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder='Repeat password'
          name="password2"
          className='auth__input'
          value={password2}
          onChange={handleInputChange}
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
