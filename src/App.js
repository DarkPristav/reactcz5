import { useRef } from "react"

const App = () => {
  const inputRef = useRef(null)

  const handleClick = (event) => {
    event.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = "" 
  }

  return <div>
    <form>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Vypsat a vyčistit</button>
    </form>
  </div>
}

export default App