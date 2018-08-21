import React, { Component } from 'react'; 
import { Button } from 'reactstrap';


class Home extends Component {
    render() {
      return (
        <div className="home">
            <p className="App-intro">
                Simples aplicação de chatbot criada em react.js para funcionar com o IBM Watson Assistant.
            </p>
        </div>
      );
    }
} 

export default Home;