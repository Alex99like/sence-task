import { Navbar } from "./components/Navbar/Navbar"
import { Ticker } from "./components/Ticker/Ticker"
import { Employed } from "./views/Employes/Employed"
import { Home } from "./views/Home/Home"
import { Services } from "./views/Services/Services"
import { Tasks } from "./views/Tasks/Tasks"


function App() {

  return (
    <main className={'app'}>
      <Navbar />
      <Home />
      <Employed />
      <Ticker />
      <Services />
      <Tasks />
    </main>
  )
}

export default App
