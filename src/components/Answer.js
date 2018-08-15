import React, { Component } from 'react'

export default class Answer extends Component {

  

  render() {
    return (
      <div>
        <h2>Comparing Answers:</h2>
        <h3>Your answer: {this.props.props.answer}</h3>
        <h3>Correct answer:</h3>
      </div>
    )
  }
}
