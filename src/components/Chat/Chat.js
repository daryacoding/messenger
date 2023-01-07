import React from 'react'
import './Chat.css'
import CreateChat from '../CreateChat/CreateChat'
import { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@mui/icons-material'

function Chat({
    chats,
    chat,
    handleChange,
    createChat
}) {
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
                        <span className="chat-name">Darya</span>
                        Hello
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
            </div>
            <div className='chat-footer'>
                <InsertEmoticon />
                <CreateChat 
                    createChat={createChat}
                    chat={chat}
                    handleChange={handleChange}
                />
                <Mic />
            </div>
        </div>
    )
}

export default Chat