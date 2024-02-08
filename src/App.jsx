import { Navbar } from "./components/layout/navbar"
import ItemListContainer from "./components/pages/itemListContainer"

function App() {

  return (
    
      <div>
        <ItemListContainer greeting = "hola como estas"/>
        <h1 className="title">lameu</h1>
        <Navbar />
      </div>
    
      
  )
}

export default App
