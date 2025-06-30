import { useEffect, useState } from 'react'
import { ToDoProvider } from './Contexts';
import TodoForm from './Components/TodoForms';
import TodoItem from './Components/TodoItem';


function App() {
  const [todos, setTodos] = useState([  ]);

  const addTodo=(todo)=>{
    setTodos((prevtodos)=>[{id:Date.now(),...todo},...prevtodos])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo))) //current id equals then we are updating the todo
  }
  
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevtodo)=>prevtodo.id!==id)) //this means that the current id should not be equal to the id we are deleting
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo, completed:!prevtodo.completed}:prevtodo))
  }

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos &&storedTodos.length>0){
      setTodos(storedTodos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  return (
    <ToDoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#18184a] min-h-screen py-8">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-32 w-64] w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Have to add Loop and Add TodoItem here */}
            {todos.map((each) => (
              <div className="w-full " key={each.id}
              >
                <TodoItem todo={each} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
