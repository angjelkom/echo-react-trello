import React from 'react';
import Lists from '../containers/Lists';
import { BOARD_TITLE } from '../actions';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Alert from './Alert';


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});


const Board = ({ board, onKeyPress, setAppBarTitle, classes }) => {

  if(board){
    setAppBarTitle(board.name);
  }

  return (
<div className={classes.root}>
    {
      board ? 
      <>
      <Grid container spacing={16} justify="center">
      <TextField
      id="name"
      label="List Name"
      margin="normal"
      className={classes.textField}
      onKeyPress={event => onKeyPress(event, board.id)}
    /></Grid><Lists lists={board.lists} boardId={board.id} />
      </>
          : <Alert />
    }
    </div>
     
  )
}

export default withStyles(styles)(Board);
