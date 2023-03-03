import './App.css'
import { Gallery } from './components/Gallery'
import { NavBarMenu } from './components/NavBarMenu'
import { Home } from './pages/Home'
import { StateExample } from './pages/StateExample'


function App() {
  return (
    <div id="App">
      <Gallery />
      <NavBarMenu />
    </div>
  )
}

export default App
