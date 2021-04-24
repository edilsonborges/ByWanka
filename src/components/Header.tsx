import React from 'react'
import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <div className="flex flex-col self-center pt-6 w-80">
      <nav className="flex flex-row justify-between text-gray-500">
        <Link href="/">
          <a className="cursor-pointer hover:underline">Início</a>
        </Link>
        <Link href="/category">
          <a className="cursor-pointer hover:underline">Categoria</a>
        </Link>
        <Link href="/about">
          <a className="cursor-pointer hover:underline">Sobre nós</a>
        </Link>
        <Link href="/contact">
          <a className="cursor-pointer hover:underline">Contato</a>
        </Link>
      </nav>
    </div>
  )
}
