import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import './App.css';

// components
import Verbs from './components/Verbs';
import Adjectives from './components/Adjectives';
import Nouns from './components/Nouns';
import Nav from './components/Nav';


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
});

class App extends Component {
  state = {
    spacing: '40',
  };

  render() {

    const { classes } = this.props;
    const { spacing } = this.state;
    console.log(this.state);
    return (
      <React.Fragment>
        <Nav />
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing-xs-8>
              <Paper className={classes.paper}>
                <Verbs />
              </Paper>
              <Paper className={classes.paper}>
                <Adjectives />
              </Paper>
              <Paper className={classes.paper}>
                <Nouns />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
  
    );
  }
}

export default withStyles(styles)(App);
