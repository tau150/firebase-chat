import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import NavBar from '../../components/NavBar';
import ChatMessage from '../../components/ChatMessage';
import { useSessionActions, useUser } from '../../session/hook';
import { useChat } from '../../hooks/useChat';
import { db } from '../../firebase';


const GeneralContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const BodyContainer = styled.div`
  display: flex;
  width: 70%;
  margin-top: 5%;
  flex-direction: column;
`


const ChatHeader = styled.div`
  height: 60px;
  background: #000;
  position: relative;
`

const ChatBox = styled.div`
  height: 400px;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background: #577085;
`

const ChatBadge = styled.div`
  width: 60px;
  height: 60px;
  background: #68adeb;
  position: absolute;
  border-radius:50%;
  top: -20px;
  left: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
`


const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;

  input {
    flex-grow: 1;
    padding: 10px;
    border: none !important;
  }

  .icon{
    width: 60px;
    font-size: 24px;
    cursor: pointer;
  }
`

const Chat  = () => {

  const { signOut } = useSessionActions();
  const user = useUser()
  const { messages } = useChat();
  const [ inputValue, setInputValue ] = useState('');
  const divRref = useRef(null);

  const initials = () => {
    const arrName = user.name.split(" ");

    return arrName[0].charAt(0) + arrName[1].charAt(0)
  }

  useEffect( () => {
    divRref.current.scrollTo(0, 1000000);
  },[messages] )

  const onClick = async () => {

    if(!inputValue) return;
    try {
      await db.collection("messages").add({
        message: inputValue,
        timestamp: Date.now(),
        userId: user.id,
        userName: user.name
      });
      setInputValue('');
    } catch (error) {
      console.log('error: ', error);

    }
  }

   return (
     <GeneralContainer>
       <NavBar signOut={signOut} user={user} />
       <BodyContainer>
        <ChatHeader>
          <ChatBadge>
            { initials() }
          </ChatBadge>
        </ChatHeader>
        <ChatBox ref={divRref}>
          { messages.map( m => <ChatMessage message={m} isOwn={m.userId === user.id} />)}
        </ChatBox>
        <InputContainer>
          <input type="text" value={inputValue} onChange={ e => setInputValue(e.target.value) }/>
          <FontAwesomeIcon  className="icon" icon={faPaperPlane} onClick={onClick} />
        </InputContainer>
       </BodyContainer>

     </GeneralContainer>
   )
}

export default Chat;