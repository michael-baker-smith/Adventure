import React, { useState, useEffect } from 'react'

import { getScenario } from '../api'

function App() {
  const [newScenario, setNewScenario] = useState([])

  useEffect(() => {
    getScenario()
      .then((res) => {
        setNewScenario(res)
        console.log(res)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  const scenarios = newScenario.map((data, i) => {
    console.log(data)
    return (<div key={i}>{data.description}{<img src={data.url}/>}</div>)
    
  })

  return <h1>{scenarios}</h1>
}

export default App
