import { useState } from 'react'
import './App.css'

// J'ai besoin d'un state pour chaque bouton qui indique true ou false

const App = () => {
  const [status, setStatus] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const array = [setStatus2, setStatus3]
  const array2 = [setStatus, setStatus3]
  const array3 = [setStatus, setStatus2]

  const handleStatus = () => {
    setStatus(!status)
    if (status2 && status3 === true) {
      array[randomIntFromInterval(0, 1)](false)
    }
  }

  const handleStatus2 = () => {
    setStatus2(!status2)
    if (status && status3 === true) {
      array2[randomIntFromInterval(0, 1)](false)
    }
  }

  const handleStatus3 = () => {
    setStatus3(!status3)
    if (status && status2 === true) {
      array3[randomIntFromInterval(0, 1)](false)
    }
  }

  return (
    <main>
      <div>
        <button onClick={handleStatus}  style={status === false ? {backgroundColor: '#D34848'} : null}>FALSE</button>
        <button onClick={handleStatus} style={status === true ? {backgroundColor: '#46AC4A'} : null}>TRUE</button>
        <span>FAST</span>
      </div>
      <div>
        <button onClick={handleStatus2} style={status2 === false ? {backgroundColor: '#D34848'} : null}>FALSE</button>
        <button onClick={handleStatus2} style={status2 === true ? {backgroundColor: '#46AC4A'} : null}>TRUE</button>
        <span>GOOD</span>
      </div>
      <div>
        <button onClick={handleStatus3} style={status3 === false ? {backgroundColor: '#D34848'} : null}>FALSE</button>
        <button onClick={handleStatus3} style={status3 === true ? {backgroundColor: '#46AC4A'} : null}>TRUE</button>
        <span>CHEAP</span>
      </div>
    </main>
  )
}

export default App
