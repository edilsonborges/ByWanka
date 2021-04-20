import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="flex flex-row justify-between p-2 px-16 text-gray-700 align-middle">
        <Link href="/">
          <div className="cursor-pointer">
            <Image
              src="/img/logo-bywanka.png"
              alt="Logo"
              width="100"
              height="38"
            />
          </div>
        </Link>
        <div className="pt-1">
          <a href="#">Cadastrar</a>
          {' | '}
          <a href="#">Logar</a>
        </div>
      </div>
      <div className="flex flex-row h-1">
        <div className="bg-wkred flex-grow">&nbsp;</div>
        <div className="bg-wkyellow flex-grow">&nbsp;</div>
        <div className="bg-wkorange flex-grow">&nbsp;</div>
        <div className="bg-wkviolet flex-grow">&nbsp;</div>
        <div className="bg-wkblueviolet flex-grow">&nbsp;</div>
      </div>
    </nav>
  )
}

export default Navbar
