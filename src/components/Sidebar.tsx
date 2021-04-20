import React from 'react'

const LiItem = () => {
  return (
    <li className="hover:bg-gray-100 p-2">
      <a href="#">Categoria</a>
    </li>
  )
}

const Sidebar = () => {
  return (
    <div className="bg-green-300">
      <ul>
        <LiItem />
        <LiItem />
        <LiItem />
        <LiItem />
        <LiItem />
      </ul>
    </div>
  )
}

export default Sidebar
