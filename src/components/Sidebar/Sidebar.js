import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import {Avatar, IconButton} from '@mui/material'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar