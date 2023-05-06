import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState('loading...');
  useEffect(() => {
    fetch('http://localhost/api').then(r => r.json()).then((res) => {
      if (res?.data) {
        setData(res.data);
      }
    })
  });

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{data}</h1>
    </div>
  )
}

export default App
