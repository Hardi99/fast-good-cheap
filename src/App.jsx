import { useState } from 'react'
import './App.css'

// J'ai besoin d'un state pour chaque bouton qui indique true ou false
// J'ai besoin d'une fonction qui enregistre le dernier bouton qui est passé en state true
// J'ai besoin d'un state qui compte le nombre de boutons qui sont passés en state true

const App = () => {
  let index = 0
  const [status, setStatus] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [count, setCount] = useState(index)

  const handleStatus = () => {
    setStatus(!status)
    console.log(status)
  }

  const handleStatus2 = () => {
    setStatus2(!status2)
    console.log(status2)
  }

  const handleStatus3 = () => {
    setStatus3(!status3)
    console.log(status3)
  }

  const handlePlus = () => {
    setCount(index + 1)
    console.log(count)
  }

  const handleMinus = () => {
    setCount(index - 1)
    console.log(count)
    if (index === 0) {
      setCount(0)
    }
  }

  return (
    <main>
      <div>
        <button onClick={() => {
          // Avec cette syntaxe, je peux attrivuer plusieur fonctions à 1 seul évènemen
          handleStatus();
          handleMinus();
        }}  style={status === false ? {backgroundColor: '#D34848'} : null}>FALSE</button>
        <button onClick={() => {
          handleStatus();
          handlePlus();
        }} style={status === true ? {backgroundColor: '#46AC4A'} : null}>TRUE</button>
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
