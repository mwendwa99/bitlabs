import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <img src={reactLogo} alt="React Logo" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                  Learn React
                </a>
              </li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default App
