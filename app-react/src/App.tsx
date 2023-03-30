import "./App.css"
import { NavBarMenu } from "./components/NavBarMenu"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Gallery } from "./components/Gallery"


function App() {
    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
                <NavBarMenu />
            </BrowserRouter>
        </div>
    )
}

export default App
