import { useState, useEffect } from 'react'
import Chat from './components/Chat/Chat'
import AuthPage from './components/AuthPage/AuthPage'
import Sidebar from './components/Sidebar/Sidebar'

export default function App() {
    const [state, setState] = useState(null)
    const [user, setUser] = useState(null)

    const fetchState = async () => {
        try {
            const response = await fetch('/api/test')
            const data = await response.json()
            setState(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchState()
    }, [])
    return (
        <main className='App'>
            {
                user ?
                    <div className='app-body'>
                        <Sidebar />
                        <Chat />
                    </div>
                    :
                    <AuthPage setUser={setUser} />
            }

        </main>
    );
}