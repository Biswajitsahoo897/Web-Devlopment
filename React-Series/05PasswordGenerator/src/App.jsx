import { useState, useCallback } from 'react'

function App() {
  // const [count, setCount] = useState(0);
  const [length, setLength] = useState(8); //for the length of the password
  const [numbers, setNumbers] = useState(false); //for the numbers in the password
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState(""); //for the uppercase letters in the password

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789"
    if (characters) str += "!@#$₹%^&*?~"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char)

      setPassword(pass)


    }
  }, [length, numbers, characters, setPassword])


  return (  
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input

          />

        </div>
      </div>
    </>

  )
}

export default App
