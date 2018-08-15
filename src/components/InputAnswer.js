import React, { Component } from 'react'

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginLeft: 200,
    marginRight: 200,
    marginTop: 50,
    marginBottom: 50
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class InputAnswer extends Component {

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.props.changeValue(name, value);
  }

  render() {
    const { classes } = this.props;

    return (
      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Please write your answer here:</InputLabel>
        <Input
          id="adornment-amount"
          onChange={this.handleChange.bind(this)}
          name="answer"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          type="text"
          required
        />
        <Button 
          variant="contained" 
          type="submit" 
          color="primary" 
          className={classes.button}
          onClick={this.props.answerSubmitted}
        >
          Submit Answer
        </Button>
      </FormControl>
    )
  }
}


export default withStyles(styles)(InputAnswer);