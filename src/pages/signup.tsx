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

  const sendForm = (e) => {
    console.log(e)
  }
  console.log(errors)

  return (
    <div className="flex flex-col bg-gray-100 content-area">
      <div className="container flex flex-col items-center justify-center flex-1 max-w-md px-2 mx-auto">
        <div className="w-full px-6 py-8 text-gray-700 bg-white rounded shadow-md">
          <h1 className="mb-8 text-3xl text-center">Cadastre-se</h1>
          <form onSubmit={handleSubmit(sendForm)}>
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              type="text"
              name="fullname"
              placeholder="Nome Completo"
              {...(register('fullName'), { required: true })}
            />
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              type="text"
              name="email"
              placeholder="Email"
              {...(register('email'), { required: true })}
            />
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              type="password"
              name="password"
              placeholder="Senha"
              {...(register('password'), { required: true })}
            />
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              type="password"
              name="confirm_password"
              placeholder="Confirme a senha"
              {...(register('confirmPassword'), { required: true })}
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
