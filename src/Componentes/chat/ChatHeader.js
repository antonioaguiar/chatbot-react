import React from 'react';
import {Alert, Badge} from 'reactstrap';

const ChatHeader = props => {
    return (
        <div className="chat-header">
            <Alert color="success">
                <h2>CHATBOT</h2>
            </Alert>
        </div>
    );
}
  
export default ChatHeader;