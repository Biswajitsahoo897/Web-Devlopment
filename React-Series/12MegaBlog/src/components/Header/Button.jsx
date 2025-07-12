import React from 'react'

// Parameter passed as children ,whatever text will be passed that will 
// Using { children } in function parameters is just destructuring.
function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${type}${bgColor}${textColor} ${className}`}{...props}>//Spreads all props as attributes

        {children}
    </button>
    
  )
}

export default Button
