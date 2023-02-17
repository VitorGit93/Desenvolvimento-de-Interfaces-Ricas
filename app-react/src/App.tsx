import './App.css'
import { Button } from './components/Button'

function App() {
  return (
    <div id="App">
      <header>
        <h1>Bem Vindo</h1>
      </header>
      <main>
        <div className="action-buttons">
          <Button text="Login" />
          <Button text="Cadastro" />
          <Button text="" />
        </div>
      </main>
    </div>
  )
}

export default App
