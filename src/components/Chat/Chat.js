import React from 'react'
import './Chat.css'
import CreateChat from '../CreateChat/CreateChat'
import { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@mui/icons-material'

function Chat(props) {
    const [chats, setChats] = useState([])
    const [foundChat, setFoundChat] = useState(null)
    const [newChat, setNewChat] = useState({
        name: '',
        message: ''
    })
    // index
    const getChats = async () => {
        try {
            const response = await fetch('/api/chats')
            const data = await response.json()
            setChats(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteChat = async (id) => {
        try {
            const response = await fetch(`/api/chats/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundChat(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateChat = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/chats/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
            })
            const data = await response.json()
            setFoundChat(data)
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
                    body: JSON.stringify({...newChat})
                })
                const data = await response.json()
                setFoundChat(data)
                setNewChat({
                    name: '',
                    readyToEat: false,
                    color: ''
                })
            } catch (error) {
                console.error(error)
            }
        }

    const handleChange = (evt) => {
        setNewChat({...newChat, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getChats()
    }, [foundChat])
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
                        {chats.map((chat) => {
                            return (
                                <div  key={chat._id} className='chat-body'>
                                    <p className='chat-message'>{chat.message}</p>
                                    <span className='chat-name'>{chat.name}</span>
                                </div>
                            )
                        })}
                    <p className='chat-message chat-reciever'>
                        <span className="chat-name">Diyar</span>
                        Hi
                        <span className='chat-timestamp'>
                            {new Date().toUTCString()}
                        </span>
                    </p>
            <div className='chat-footer'>
                <InsertEmoticon />
                <Mic />
            </div>
        </div>
    )
}

export default Chat