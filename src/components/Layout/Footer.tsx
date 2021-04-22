import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [date, setDate] = useState()

  const getYear = () => setDate(new Date().getFullYear())
  useEffect(() => {
    getYear()
  }, [])

  return (
    <footer className="bg-gray-300">
      <div className="flex flex-row h-1">
        <div className="bg-wkred flex-grow">&nbsp;</div>
        <div className="bg-wkyellow flex-grow">&nbsp;</div>
        <div className="bg-wkorange flex-grow">&nbsp;</div>
        <div className="bg-wkviolet flex-grow">&nbsp;</div>
        <div className="bg-wkblueviolet flex-grow">&nbsp;</div>
      </div>
      <div className="container py-1 h-10 px-16">
        <div className="text-gray-400">@ByWanka {date}</div>
      </div>
    </footer>
  )
}

// export const getStaticProps = () => {
//   const year = new Date().getFullYear()
//   console.log('year: ', year)
//   return {
//     props: {
//       year: year
//     }
//   }
// }
