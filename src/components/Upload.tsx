import React from 'react'

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log(e)
  console.log('sended')
}
export default function Upload(): JSX.Element {
  return (
    <div className="flex-row p-6 text-center">
      <form onSubmit={handleSubmit}>
        <div className="flex-auto">
          <input type="file" multiple />
        </div>
        <div className="flex-auto">
          <button
            className="flex-1 w-24 text-white bg-blue-600 cursor-pointer rounded-2xl"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
