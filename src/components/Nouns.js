import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class Nouns extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h1>Noun</h1>
        <Button variant="contained" color="primary" className={classes.button}>
          Pick a Noun
        </Button>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Nouns);
