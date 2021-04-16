import axios from 'axios'
import React from 'react'
// const fs = require('fs');

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log(e)
  console.log('sended')
}
export default function Upload() {
  return (
    <div className="text-center flex-row p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex-auto">
          <input type="file" multiple />
        </div>
        <div className="flex-auto">
          <button
            className="bg-blue-600 text-white rounded-2xl w-24 flex-1 cursor-pointer"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
