import React from 'react'
import './Chat.css'
import { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@mui/icons-material'

function Chat(props) {
    const [chats, setChats] = useState([])
    const [chat, setChat] = useState({
        name: '',
        message: ''
    })

    const listChatsByUser = async () => {
        try {
            const response = await fetch('/api/chats', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setChats(data)
        } catch (error) {
            console.error(error)
        }
    }

    // create
    const createChat = async () => {
        try {
            const response = await fetch(`/api/chats`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...chat })
            })
            const data = await response.json()
            setChat(data)
            setChat({
                name: '',
                message: ''
            })
        } catch (error) {
            console.error(error)
        }
    }


    const handleChange = (evt) => {
        setChat({ ...chat, [evt.target.name]: evt.target.value })
    }
    useEffect(() => {
        listChatsByUser()
    }, [chat])
    return (

        <div className='chat'>
            <div className='chat-header'>
                <Avatar />
                <div className='chat-header-info'>
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className='chat-header-right'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chat-body'>
            return(
            <ul>
            {chats.map((chat) => {
                return (
                            <li key={chat._id}>
                                <p className='chat-message'>{chat.message}</p>
                                <span className='chat-name'>{chat.name}</span>
                            </li>
                )
            })}
            </ul>)
            </div>
{/*             <div className='chat-body'>
                <p className='chat-message'>
                    <span className="chat-name">Darya</span>
                    Hey
                    <span className='chat-timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat-message chat-reciever'>
                    <span className="chat-name">Diyar</span>
                    Hi
                    <span className='chat-timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat-message'>
                    <span className="chat-name">Darya</span>
                    Are you getting ready
                    <span className='chat-timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat-message chat-reciever'>
                    <span className="chat-name">Diyar</span>
                    Almost done
                    <span className='chat-timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat-message'>
                    <span className="chat-name">Darya</span>
                    Ok I'm here
                    <span className='chat-timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat-message chat-reciever'>
                    <span className="chat-name">Diyar</span>
                    Ok
                    <span className='chat-timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div> */}
            <div className='chat-footer'>
                <InsertEmoticon />
                <input type='text' value={chat.message} name='message' onChange={handleChange} placeholder='Enter Message' />
                <input type='text' value={chat.name} name='name' onChange={handleChange} placeholder='Enter Name' />
                <button onClick={() => createChat()}>Send</button>
                <Mic />
            </div>
        </div>
    )
}

export default Chat