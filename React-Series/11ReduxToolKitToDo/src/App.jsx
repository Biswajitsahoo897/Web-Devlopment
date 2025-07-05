import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {


  return (
    <div className="flex items-center justify-center bg-gradient-to-br">
      <div className="bg-white/90 rounded-xl shadow-2xl p-8 w-full ">
        <h1 className="text-3xl font-bold  mb-6 text-center drop-shadow-lg text-orange-600">Redux Toolkit To-Do</h1>
        <AddTodo />
          <Todos />
      </div>
    </div>
  )
}

export default App
