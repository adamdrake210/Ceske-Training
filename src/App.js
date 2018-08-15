import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';

// Initial data
import adjectiveData from './data/adjectiveData';
import verbData from './data/verbData';
import nounData from './data/nounData';

// components
import Nav from './components/Nav';
import Pickwords from './components/Pickwords';
import InputAnswer from './components/InputAnswer';
import Answer from './components/Answer';


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
    textAlign: 'center'
  },
  paper: {
    height: 240,
    width: 250,
    padding: 20,
    margin: 15
  },
  control: {
    padding: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      verb: '',
      noun: '',
      adjective: '',
      answer: '',
      spacing: 16
    }
  }

  pickRandomProperty = (obj) => {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
          result = prop;
    return result;
  } 

  countProperties(obj) {
    return Object.keys(obj).length;
  }

  chooseWords = () => {
    let verbArr = Object.keys(verbData);
    let randomVerb = verbArr[Math.floor(Math.random()*verbArr.length)];
    
    let nounArr = Object.keys(nounData);
    let randomNoun = nounArr[Math.floor(Math.random()*nounArr.length)];
    
    let adjectiveArr = Object.keys(adjectiveData);
    let randomAdjective = adjectiveArr[Math.floor(Math.random()*adjectiveArr.length)];


    this.setState({
      verb: verbData[randomVerb],
      noun: nounData[randomNoun],
      adjective: adjectiveData[randomAdjective]
    })
  }

  changeValue(name, value) {
    this.setState({[name]: value});
  }

  updateAnswer(answer) {
    this.setState({ answer })
  }

  answerSubmitted() {
    const answer = {...this.state.answer}
    console.log('This is the ' + {answer})
  }

  render() {

    const { classes } = this.props;
    const { spacing } = this.state;
    let verbChosen = this.state.verb;
    let answerChosen = this.state.answer;

    console.log(this.state);
    return (
      <React.Fragment>
        <Nav />
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {!verbChosen &&
                <Button variant="contained" color="primary" onClick={this.chooseWords} className={classes.button}>
                  Ready to train? Pick some words...
                </Button>}
              {verbChosen &&
                <Pickwords 
                  verb={this.state.verb}
                  noun={this.state.noun}
                  adjective={this.state.adjective}
                />
              }
            </Grid>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {verbChosen &&
                <InputAnswer 
                  changeValue={this.changeValue.bind(this)}  
                  updateAnswer={this.updateAnswer.bind(this)}
                  answerSubmitted={this.answerSubmitted.bind(this)}
                  answer={this.state.answer}
                />}
              {answerChosen &&
                <Answer 
                  props={this.state} 
                />
              }  
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
  
    );
  }
}

export default withStyles(styles)(App);
