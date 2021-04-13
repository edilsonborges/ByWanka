import React from 'react'

const Card = () => {
  return <div className="bg-gray-500 w-52 border"></div>
}

const Body = () => {
  return (
    <div className="flex-grow grid grid-cols-4 p-6 gap-6">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Body
