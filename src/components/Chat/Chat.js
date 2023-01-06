import React from 'react'
import './Chat.css'
import {useState, useEffect} from 'react'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@mui/icons-material'

function Chat() {
    const [chats, setChats] = useState([])
    const [newChat, setNewChat] = useState({
        message: '',
        name: '',
        timestamps: ''
    })

    //createChats
    const createMessage = async () => {
        try {
            const response = await fetch('/api/chats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newChat)
            })
            const createdChat = await response.json()
            const chatsCopy = [createdChat, ...chats]
            setChats(chatsCopy)
        } catch (error) {
            console.error(error)
        }
    }

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
                <p className='chat-message'>
                    <span className='chat-name'>Sonny</span>
                    This is a message
                    <span className='chat-timestamp'>
                        {new Date().toUTCString()}
                    </span>

                </p>

                <p className='chat-message chat-reciever'>
                    <span className='chat-name'>Sonny</span>
                    This is a message
                    <span className='chat-timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className='chat-footer'>
                <InsertEmoticon />
                <form>
                    <input placeholder='Type a message'
                        type='text'
                        value={newChat.message}
                        onChange={(e) => {
                            setNewChat({...newChat, chat: e.target.value})
                        }} />
                    <button onClick={createMessage}>
                        Send a message
                    </button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat