import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import UseToken from '../components/UseToken'

export default function Signin(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { token, setToken } = UseToken()

  const sendForm = async (data) => {
    try {
      const response = await axios.post('api/checkUser', data)
      console.log('response: ', response)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  return (
    <div className="flex flex-col bg-gray-100 content-area">
      <div className="container flex items-center justify-center flex-1 max-w-md px-2 mx-auto">
        <div className="w-full px-6 py-8 text-gray-700 bg-white rounded shadow-md">
          <h1 className="mb-8 text-3xl text-center">Login</h1>
          <form onSubmit={handleSubmit(sendForm)}>
            <input
              className={
                'w-full p-3 mb-4 rounded outline-none ' +
                (errors.email
                  ? 'border-2 border-red-400'
                  : 'border border-gray-300')
              }
              type="text"
              name="email"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            <input
              className={
                'w-full p-3 mb-4 rounded outline-none ' +
                (errors.password
                  ? 'border-2 border-red-400'
                  : 'border border-gray-300')
              }
              type="password"
              name="password"
              placeholder="Senha"
              {...register('password', { required: true })}
            />
            <button className="w-full p-3 mt-4 text-white bg-blue-400 rounded hover:bg-blue-500">
              Entrar
            </button>
          </form>
          <div className="mt-4 text-gray-700">
            Não tem uma conta?{' '}
            <Link href="/Signup">
              <a className="text-blue-500 underline"> Cadastre-se</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
