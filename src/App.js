import { useState } from "react"

const App = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [users, setUsers] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()

    if (fullName && email) {
      const oneUser = { userFullName: fullName, userEmail: email }
      setFullName("")
      setEmail("")
      setUsers((users) => {
        return [...users, oneUser]
      })
    } else {
      console.log("Něco nebylo vyplněno!");
    }
  }


return <article>
  <form onSubmit={formSubmit}>

    <input 
      type="text" 
      placeholder="Jméno"
      value={fullName}
      onChange={ (event) => setFullName(event.target.value) } 
    />

    <input 
      type="email" 
      placeholder="Email" 
      value={email}
      onChange={ (event) => setEmail(event.target.value) }
    /> 
      
      <button>Odeslat</button>
    </form>

    {users.map((oneUser, index) => {
      const { userFullName, userEmail } = oneUser

      return <div key={index} className="user-box">
        <h2>{userFullName}</h2>
        <p>{userEmail}</p>
      </div>
    })}

  </article>
}

export default App