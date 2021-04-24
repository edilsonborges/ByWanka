import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Custom404(): JSX.Element {
  return (
    <div className="grid self-center mt-32 text-center">
      <Image
        className="mb-1 rounded-lg"
        src="/img/sad.webp"
        width="400"
        height="400"
        objectFit="cover"
      />
      Oops! Parece que essa página não existe 🥺
      <Link href="/">
        <a className="underline">Clique aqui</a>
      </Link>
      para voltar para o início!
    </div>
  )
}
