import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="pt-6 flex flex-col self-center w-80">
      <nav className="flex flex-row justify-between text-gray-500">
        <Link href="/">
          <a className="hover:underline cursor-pointer">Início</a>
        </Link>
        <Link href="/category">
          <a className="hover:underline cursor-pointer">Categoria</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline cursor-pointer">Sobre nós</a>
        </Link>
        <Link href="/contact">
          <a className="hover:underline cursor-pointer">Contato</a>
        </Link>
      </nav>
    </div>
  )
}
