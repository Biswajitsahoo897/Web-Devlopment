import TestHello from "./TestHello"

function App() {

  return (
    // previously we were rendering only one component in single root element
    //by doing this we can render multiple components
    <> 
    //this is a fragment, it allows us to group multiple elements without adding extra nodes to the DOM
      <h1>CGU | Biswajit Sahoo</h1>
      <TestHello />    
    </>
  )
}

export default App
