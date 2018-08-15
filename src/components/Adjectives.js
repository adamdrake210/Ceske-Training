import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class Adjectives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wantTranslate: false
    }
    this.handleTranslate = this.handleTranslate.bind(this);
  }

  handleTranslate = () => {
    this.setState({
      wantTranslate: true
    })
  }

  render() {
    const { classes } = this.props;
    const { adjective, translate, example} = this.props.adjective;

    return (
      <React.Fragment>
        <h1>Adjective</h1>
        <h3>{adjective}</h3>
        <Button variant="contained" color="primary" onClick={this.handleTranslate} className={classes.button}>
          Translate
        </Button>
        {this.state.wantTranslate &&
          <p>{translate}</p>
        }
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Adjectives);