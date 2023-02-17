import './App.css'
import { Button } from './components/Button'

function App() {
  return (
    <div id="App">
      <header>
        <h1>Bem Vindo Veterano</h1>
      </header>
      <main>
        <div className="action-buttons">
          <Button text="Login" type='primary'/>
          <Button text="Cadastro" type='default'/>
        </div>
      </main>
    </div>
  )
}

export default App
