import Link from 'next/link'
import React from 'react'

export default function signup(): JSX.Element {
  return (
    <div className="flex flex-col bg-gray-100 content-area">
      <div className="container flex flex-col items-center justify-center flex-1 max-w-md px-2 mx-auto">
        <div className="w-full px-6 py-8 text-gray-700 bg-white rounded shadow-md">
          <h1 className="mb-8 text-3xl text-center">Cadastre-se</h1>
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            type="text"
            name="fullname"
            placeholder="Nome Completo"
          />
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
          <input
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            type="password"
            name="confirm_password"
            placeholder="Confirme a senha"
          />
          <button className="w-full p-3 mt-4 text-white bg-blue-400 rounded hover:bg-blue-500">
            Cadastrar
          </button>
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
