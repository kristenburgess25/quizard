import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

export default class QuizContainer extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: null,
    };
  }

  componentWillMount() {
    axios.get('/quizzes')
      .then((response) => {
        console.log('response', response.data.quizzes)
        this.setState({
          quizzes: response.data.quizzes,
        });
      })
      .catch((error) => {
        console.log(error);
    });
  }


  render() {

  const { quizzes } = this.state

  console.log(quizzes)

    return (
      quizzes ?
        <div>
          <h1>{quizzes[0].title}</h1>
          <section>
            {quizzes[0].questions.map((question, index) =>
              <Question
                className="question-container"
                key={question.id}
                id={index}
                title={question.title}
                answers={question.answers}
              /> )}
          </section>
          <button className="submit-btn">
          Submit
          </button>
        </div>
      : <h1>No Quizzes</h1>
    );
  }
}
