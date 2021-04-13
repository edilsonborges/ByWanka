import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-300 flex flex-row justify-between p-2">
      <div className="cursor-pointer">logo</div>
      <div>
        <a href="#">Cadastrar</a>
        {' | '}
        <a href="#">Logar</a>
      </div>
    </div>
  )
}

export default Navbar
