import React, { useEffect, useState } from 'react'

export default function Footer(): JSX.Element {
  const [date, setDate] = useState(0)
  const getYear = () => setDate(new Date().getFullYear())
  useEffect(() => {
    getYear()
  }, [])

  return (
    <footer className="bg-gray-300">
      <div className="flex flex-row h-1">
        <div className="flex-grow bg-wkred">&nbsp;</div>
        <div className="flex-grow bg-wkyellow">&nbsp;</div>
        <div className="flex-grow bg-wkorange">&nbsp;</div>
        <div className="flex-grow bg-wkviolet">&nbsp;</div>
        <div className="flex-grow bg-wkblueviolet">&nbsp;</div>
      </div>
      <div className="container h-10 px-16 py-1">
        <div className="text-gray-400">
          @ByWanka
          {date}
        </div>
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
