import { useState, useCallback ,useEffect, useRef } from 'react'

function App() {
  // const [count, setCount] = useState(0);
  const [length, setLength] = useState(8); //for the length of the password
  const [numbers, setNumbers] = useState(false); //for the numbers in the password
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState(""); 

  const passwordRef=useRef(null); 
  //the useRef hook is used to create a mutable object that persists for the full lifetime of the component.
  //It can be used to store a reference to a DOM element, which allows you to
  //interact with that element directly without causing re-renders.
  //So in this case, passwordRef is used to reference the input field where the generated password


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789"
    if (characters) str += "!@#$₹%^&*?~*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

      setPassword(pass)

    }
  }, [length, numbers, characters, setPassword])
  //we have to use the hook called useEffect to the passwordGenerator() function 

  const copyPasswordToClipboard=useCallback(()=>{
    //passwordRef.current?.select(); //'?' is for the optional selection if the value is NULL at initial.
    passwordRef.current?.setSelectionRange(0,4); //to select first 4 element if u want to select
    window.navigator.clipboard.writeText(password); 
  },[password])

  /*passwordRef.current?.select();: This tries to select the text inside an input field referenced by passwordRef. The ?. is optional chaining, so it only calls select() if passwordRef.current exists.
window.navigator.clipboard.writeText(password);: This copies the value of password to the user's clipboard using the Clipboard API. */

  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,characters,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
        <h1 className='text-white text-center my-3 text-2xl'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type='text'
            value={password}
            className='outline-none bg-white w-full h-10 m-1 p-2 rounded-md'
            placeholder='Enter Password'
            readOnly
            ref={passwordRef}
            //They are now talking
            //line no 10 and 58 they can now access the input field directly without needing to use state to manage its value.
          />
          <button className="outline-none bg-blue-400 text-black rounded-md m-1 px-3 py-2 hover:bg-blue-600"
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>

        <div className="flex justify-evenly" id='varibaleContainer'>
          <div className=' text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label className='text-orange'>Length: {length}</label>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
                setCharacters((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>

  )
}

export default App


// useCallback :// The useCallback hook is used to memoize a function so that it does not get recreated on every render.
// This is useful for performance optimization, especially when passing functions as props to child components or when using functions in dependencies of other hooks like useEffect.
// In this case, passwordGenerator is memoized so that it only changes when length, numbers, characters, or setPassword change. This prevents unnecessary re-creattion of the function on every render.