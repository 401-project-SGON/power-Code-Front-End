import React from 'react'
import './chat.css'

const Chat = () =>{

    console.log('process.env.CHAT : ', process.env.CHAT_API);
    console.log('process.env.CHAT : ', process.env.REACT_APP_API);

    return(

        <iframe className='chat' src='https://chat-server-obada.herokuapp.com'/>

    )
}

export default Chat;