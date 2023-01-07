import { useState, useEffect } from 'react'
import Chat from './components/Chat/Chat'
import Auth from './components/AuthPage/Auth'

export default function App() {
    /*
    Login, SignUp, CreateChat, ListChatsByUser, DeleteChat, UpdateChat
    */

    const handleChangeAuth = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    const handleChange = (event) => {
        setChat({ ...chat, [event.target.name]: event.target.value })
    }
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        name: ''
    })
    const [chat, setChat] = useState({
        message: '',
        name: ''
    })
    const [chats, setChats] = useState([])

    const [token, setToken] = useState('')
    const login = async () => {
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        } catch (error) {
            console.error(error)
        }
    }
    const signUp = async () => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...credentials })
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        } catch (error) {
            console.error(error)
        }
    }
    const createChat = async () => {
        try {
            const response = await fetch('/api/chats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ ...chat })
            })
            const data = await response.json()
            setChats([data, ...chats])
        } catch (error) {
            console.error(error)
        } finally {
            setChat({
                message: '',
                name: ''
            })
        }
    }
    const listChatsByUser = async () => {
        try {
            const response = await fetch('/api/users/chats', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            setChats(data)
        } catch (error) {
            console.error(error)
        }
    }
    const deleteChat = async (id) => {
        try {
            const response = await fetch(`/api/chats/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await response.json()
            const chatsCopy = [...chats]
            const index = chatsCopy.findIndex(chat => id === chat._id)
            chatsCopy.splice(index, 1)
            setChats(chatsCopy)
        } catch (error) {
            console.error(error)
        }
    }
    const updateChat = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/chats/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedData)
            })
            const data = await response.json()
            const chatsCopy = [...chats]
            const index = chatsCopy.findIndex(chat => id === chat._id)
            chatsCopy[index] = { ...chatsCopy[index], ...updatedData }
            setChats(chatsCopy)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
            listChatsByUser()
        }
    }, [token])

    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
            setToken(JSON.parse(tokenData))
        }
    }, [])
    return (
        <>
            <Auth
                login={login}
                credentials={credentials}
                handleChangeAuth={handleChangeAuth}
                signUp={signUp}
                token={token}
                setToken={setToken}
            />
            <Chat
                chat={chat}
                chats={chats}
                createChat={createChat}
                handleChange={handleChange}
            />
        </>
    )
}