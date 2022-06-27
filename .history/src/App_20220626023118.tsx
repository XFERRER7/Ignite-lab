import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { SideBar } from "./components/SideBar"
import { Video } from "./components/Video"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {

  return (
    <div>
      <ApolloProvider client={client}>
        
      </ApolloProvider>
     <Router>
    </div>
  )
}

export default App
