import React from 'react'
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Chat.css"

function Chat() {
  return (
    <div className='chat'>
        {/* chat header */}
        <div className='chat__header'>
            <Avatar/>
            <div className='chat__headerInfo'>
                <h3>Room name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                <SearchOutlinedIcon/>
                </IconButton>
                <IconButton>
                <AttachFileOutlinedIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
        </div>

        {/* body */}
        <div className='chat__body'>
            <p className='chat__message'>Hello</p>
        </div>

        {/* footer */}
        <div className='chat__footer'>
            
        </div>
    </div>
  )
}

export default Chat