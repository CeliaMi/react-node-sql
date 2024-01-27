import React from 'react'

const Alert = ({text}) => {
  return (
    <div className="rounded ring-indigo-600 bg-opacity-20 bg-indigo-800 text-indigo-400 px-4 py-2" role="alert">
        <p className="text-sm">*{text}</p>
    </div>
  )
}

export default Alert