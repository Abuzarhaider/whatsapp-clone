import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@mui/material';

function SidebarChat({addNewChat}) {

    const createChat = ()=>{
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            // Database stuff
        }
    };

  return !addNewChat ?  (
    <div className='sidebarChat'>
        <Avatar/>
        <div className='sidebarChat__info'>
            <h2>Room name</h2>
            <p>Last message...</p>
        </div>
    </div>
  ): (
    <div onClick={createChat} className='sidebarChat'>
        <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat