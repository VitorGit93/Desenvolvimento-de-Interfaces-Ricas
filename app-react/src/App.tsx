import './App.css'
import { Button } from './components/Button'
import { Title } from './components/Title'

function App() {
  return (
    <div id="App">
       <header>
          <Title text='Bem Vindo'/>
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
