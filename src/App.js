import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import QuizContainer from './QuizContainer.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>QUIZARD</h2>
        </div>
        <QuizContainer />
      </div>
    );
  }
}

export default App;
