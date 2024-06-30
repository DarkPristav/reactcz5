import { useState } from "react"

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [names, setNames] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()

    if (firstName) {
      setNames((names) => {
        return [...names, firstName]
      })
  } else {
    alert("Nebylo nic vyplněno")
  }

    setFirstName("")
  }  

  return <article>
    <form onSubmit={formSubmit}>
      <input
        className="userName"
        type="text"
        placeholder="Jméno"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <button>Odeslat</button>
    </form>
   {names.map((oneName, index) => {
     return <p
       className="oneName"
       key={index}>
       {oneName}
     </p>
})}
  </article>

}

export default App