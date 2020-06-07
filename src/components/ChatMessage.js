import React from 'react';
import styled from 'styled-components';


const MessageBox = styled.div`
margin-left: ${({ isOwn }) => ( isOwn ? 'auto' : '20px')};
margin-right: ${({ isOwn }) => ( isOwn ? '20px' : '')};
background: ${({ isOwn }) => ( isOwn ? '#68adeb' : '#6f89a0')};
align-items: center;
border-radius: 10px;
padding-top: 10px;

  span{
    margin-top: 10px;
    padding: 15px;
  }

.details {
  display: flex;
  justify-content: flex-end;
  padding: 5px 10px;

  p  {
    font-size: 8px;
    margin: 10px 5px;
    align-self: flex-end;
  }
}


`

const MessageContainer = styled.div`
  padding: 12px;
  color: #fff;
  margin: 0px;
  display: flex;

  `
const ChatMessage = ({message, isOwn}) => {

  var options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
},
intlDate = new Intl.DateTimeFormat( undefined, options );
var date = new Date(message.timestamp);

  return (
    <div>
      <MessageContainer >
        <MessageBox isOwn={isOwn}>
          <span >
            {message.message}
          </span>
          <div className="details">
             { !isOwn &&  <p>{message.userName}</p> }
             <p>{ intlDate.format(date ) }</p>
          </div>

        </MessageBox>
      </MessageContainer>
    </div>
  )

}

export default ChatMessage;