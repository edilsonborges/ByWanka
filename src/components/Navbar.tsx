import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-300 flex flex-row justify-between p-2 text-gray-700">
      <div className="cursor-pointer ">Logo</div>
      <div>
        <a href="#">Cadastrar</a>
        {' | '}
        <a href="#">Logar</a>
      </div>
    </nav>
  )
}

export default Navbar
