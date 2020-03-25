import React from 'react'

const Chat = () =>{

    console.log('process.env.CHAT : ', process.env.CHAT_API);
    console.log('process.env.CHAT : ', process.env.REACT_APP_API);

    return(

        <iframe src={process.env.CHAT}/>

    )
}

export default Chat;