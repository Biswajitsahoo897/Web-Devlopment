import { createSlice ,nanoid} from "@reduxjs/toolkit";
// A function from Redux Toolkit that automatically creates action creators and reducers.
const initialState={
    todos:[{id:1,text:"Hello world"}]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    // Reducers are the functions that modify the state.
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid() ,
                text:action.payload.text
            }
            state.todos.push(todo); //acessing state directly is allowed  because previous state is preserved so no need to use the Spread Operator
        },
        // reducer 2
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions //we have to export each reducer indivisualy 
export default todoSlice.reducer
/*
State is a current Snapshort or data for the slice 
Action is like what Just happened? , Object describing what to do & carries data
action.payload returns a text like "Wash Car"
*/