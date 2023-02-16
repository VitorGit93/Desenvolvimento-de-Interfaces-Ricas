import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="app">

      <header>
        <h1>Bem Vindo</h1>
      </header>

      <main>

        <div className="action-buttons">
          <a className="btn" href="/login.html">Login</a>
          <a className="btn" href="/register.html">Criar Conta</a>
        </div>
        
      </main>

    </div>
  )
}

export default App
