import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

type FormValue = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export default function signup(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValue>()

  const sendForm = async (data) => {
    try {
      const response = await axios.post('api/user', data)
      console.log('response: ', response)
    } catch (error) {
      console.log('error: ', error)
    }
  }
  console.log(errors)

  return (
    <div className="flex flex-col bg-gray-100 content-area">
      <div className="container flex flex-col items-center justify-center flex-1 max-w-md px-2 mx-auto">
        <div className="w-full px-6 py-8 text-gray-700 bg-white rounded shadow-md">
          <h1 className="mb-8 text-3xl text-center">Cadastre-se</h1>
          <form onSubmit={handleSubmit(sendForm)}>
            <input
              className={
                'w-full p-3 mb-4 rounded outline-none ' +
                (errors.fullName
                  ? 'border-2 border-red-400'
                  : 'border border-gray-300')
              }
              type="text"
              name="fullname"
              placeholder="Nome Completo"
              {...register('fullName', { required: true })}
            />
            <input
              className={
                'w-full p-3 mb-4 rounded outline-none ' +
                (errors.email
                  ? 'border-2 border-red-400'
                  : 'border border-gray-300 ')
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
                  : 'border border-gray-300 ')
              }
              type="password"
              name="password"
              placeholder="Senha"
              {...register('password', { required: true })}
            />
            <input
              className={
                'w-full p-3 mb-4 rounded outline-none ' +
                (errors.confirmPassword
                  ? 'border-2 border-red-400'
                  : 'border border-gray-300 ')
              }
              type="password"
              name="confirmPassword"
              placeholder="Confirme a senha"
              {...register('confirmPassword', { required: true })}
            />
            <input
              type="submit"
              value="Cadastrar"
              className="w-full p-3 mt-4 text-white bg-blue-400 rounded cursor-pointer hover:bg-blue-500"
            />
          </form>
          <div className="mt-4 text-gray-700">
            Já tem uma conta?{' '}
            <Link href="/signin">
              <a className="text-blue-500 underline"> Logue-se</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
