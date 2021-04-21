import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Custom404() {
  return (
    <div className="self-center mt-32 text-center grid">
      <Image
        className="rounded-lg mb-1"
        src="/img/sad.webp"
        width="400"
        height="400"
        alt=""
      />
      Oops! Parece que essa página não existe 🥺
      <Link href="/">
        <a className="underline">Clique aqui</a>
      </Link>
      para voltar para o início!
    </div>
  )
}
