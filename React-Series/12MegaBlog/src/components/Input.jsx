import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    clasName = '',
    ...props
}, ref) {
    return (
        <div className="w-full">
            {
                label && <label className='inline-block mb-1 pl-1' 
                htmlFor={props.id}>{label}</label>
            }
            <input type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black 
            outline-none focus:bg-gray-50 duration-200 
            border border-gray-200 w-full ${clasName}`} 
            ref={ref} //it will give the reference of the parent component,using ther forwaredRef hook,for accessing the state of the compnt
            {...props}
            id={useId}
            />
        </div>
    )
})

export default Input
