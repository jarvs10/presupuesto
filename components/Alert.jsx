import React from 'react'

const Alert = ({children}) => {
  return (
    <div className='bg-red-600 py-2 w-full mt-2 text-white font-bold text-center uppercase'>
      {children}
    </div>
  )
}

export default Alert