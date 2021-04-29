import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function signin(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  return (
    <div className="flex flex-col bg-gray-100 content-area">
      <div className="container flex items-center justify-center flex-1 max-w-md px-2 mx-auto">
        <div className="w-full px-6 py-8 text-gray-700 bg-white rounded shadow-md">
          <h1 className="mb-8 text-3xl text-center">Login</h1>
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            type="password"
            name="password"
            placeholder="Senha"
          />
          <button className="w-full p-3 mt-4 text-white bg-blue-400 rounded hover:bg-blue-500">
            Entrar
          </button>
          <div className="mt-4 text-gray-700">
            Não tem uma conta?{' '}
            <Link href="/signup">
              <a className="text-blue-500 underline"> Cadastre-se</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
