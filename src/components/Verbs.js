import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class Verbs extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h1>Verb</h1>
        <Button variant="contained" color="primary" className={classes.button}>
          Pick a Verb
        </Button>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Verbs);