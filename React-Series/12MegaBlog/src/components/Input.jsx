import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
}, ref) {
    const userId=useId();
    const inputId=userId || props.id
    return (
        <div className="w-full">
            {
                label && <label className='inline-block mb-1 pl-1'
                    htmlFor={props.id}>{label}</label>
            }
            <input type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black 
            outline-none focus:bg-gray-50 duration-200 
            border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={inputId}
            />
        </div>
    )
})

export default Input


// Notes
//it will give the reference of the parent component,using ther forwaredRef hook,for accessing the state of the compnt
