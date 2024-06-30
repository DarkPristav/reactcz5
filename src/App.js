import { useState, useEffect, useRef } from "react"

const App = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage])
      setNewMessage("")
    }
  }

  useEffect(() => {
  messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  return <section className="chat">
  <div className="chat-box">
    {messages.map((oneMessage, index) => (
      <p key={index}>{oneMessage}</p>
    ))}
    <div ref={messagesEndRef}></div>
    <form onSubmit={handleSubmit}>
      <input  type="text"
                value={newMessage}
                placeholder="Zadejte zprávu"
                onChange={ (e) => setNewMessage(e.target.value) }
        />
        <button>Odeslat</button>
    </form>
  </div>
</section>
  
}

export default App