import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat'
import { useState, useEffect } from "React"

function App() {
  const [chats, setChats] = useState([])
  const [newChat, setNewChat] = useState({
    message: '',
    name: '',
    timestamps: ''
  })

  //createChats

  const createMessage = async () => {
    try {
      const response = await fetch ('/api/chats')
      const createdChat = await response.json()
      const chatsCopy =[createdChat,...chats]
      setChats(chatsCopy) 
    } catch (error) {
      console.error(err)
    }
  }
  return (
    <div className="App">
      <div className='app-body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
