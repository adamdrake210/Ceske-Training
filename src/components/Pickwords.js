import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Verbs from './Verbs';
import Adjectives from './Adjectives';
import Nouns from './Nouns';

const styles = theme => ({
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


class Pickwords extends Component {
  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <Verbs verb={this.props.verb}/>
        </Paper>
        <Paper className={classes.paper}>
          <Adjectives adjective={this.props.adjective}/>
        </Paper>
        <Paper className={classes.paper}>
          <Nouns noun={this.props.noun}/>
        </Paper>
      </React.Fragment>
    )
  }
}


export default withStyles(styles)(Pickwords);