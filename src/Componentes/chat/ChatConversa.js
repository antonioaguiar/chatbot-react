import React, { Component } from 'react'; 
import {Alert, Badge} from 'reactstrap';

class ChatConversa extends Component {
    render() {
      return (
        <div className="chat-conversa">
        
            <Badge color="primary">Você disse:</Badge>
            <Alert color="primary">Olá, como posso lhe ajudar hoje?</Alert>

            <Badge color="warning">Chatbot disse:</Badge>
            <Alert color="warning">Olá, como posso lhe ajudar hoje?</Alert>
             
        </div>
      );
    }
} 


export default ChatConversa;