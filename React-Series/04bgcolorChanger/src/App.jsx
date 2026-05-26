import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('black') //useState is a hook that allows us to use state in functional components, it returns an array with two elements, the current state and a function to update it;

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }} //kinda inline css
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 m-1 py-2 rounded-3xl">
        <div className="flex flex-wrap justify-center px-4 py-3 bg-white rounded-3xl gap-3 shadow-gray-400 shadow-lg">
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor:'red' }}
          onClick={() => setColor('red')} //onclick always takes a function because it is an event,it doesnt want amy returm value , so have to use the arrow function
          >Red</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'Green' }}
          onClick={() => setColor('green')}
          >Green</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'blue'}}
          onClick={() => setColor('blue')}
          >blue</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'olive' }}
          onClick={() => setColor('olive')}
          >olive</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'orange' }}
          onClick={() => setColor('orange')}
          >Orange</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-black"
          style={{ backgroundColor: 'lavender'}}
          onClick={() => setColor('lavender')}
          >Lavender</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'pink'}}
          onClick={() => setColor('pink')}
          >Pink</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'Purple'}}
          onClick={() => setColor('purple')}
          >Purple</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-black"
          style={{ backgroundColor: 'white'}}
          onClick={() => setColor('white')}
          >White</button>
          <button className="outline-none px-5 py-2 rounded-full shadow-lg text-white"
          style={{ backgroundColor: 'Black'}}
          onClick={() => setColor('Black')}
          >Black</button>
        </div>
      </div>
    </>
  )
}
//olive ,grey ,pink ,blue,black,purple ,white,
export default App
