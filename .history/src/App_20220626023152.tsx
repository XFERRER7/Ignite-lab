import { ApolloProvider } from "@apollo/client"
import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { SideBar } from "./components/SideBar"
import { Video } from "./components/Video"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

function App() {

  return (
    <div>
      <ApolloProvider client={client}>
        
        <Router>
      </ApolloProvider>

    </div>
  )
}

export default App
