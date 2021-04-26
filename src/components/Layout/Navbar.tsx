import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = (): JSX.Element => {
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
        <div className="pt-3">
          <Link href="signup">
            <a href="#">Cadastrar</a>
          </Link>
          {' | '}
          <Link href="signin">
            <a href="#">Logar</a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row h-1">
        <div className="flex-grow bg-wkred">&nbsp;</div>
        <div className="flex-grow bg-wkyellow">&nbsp;</div>
        <div className="flex-grow bg-wkorange">&nbsp;</div>
        <div className="flex-grow bg-wkviolet">&nbsp;</div>
        <div className="flex-grow bg-wkblueviolet">&nbsp;</div>
      </div>
    </nav>
  )
}

export default Navbar
