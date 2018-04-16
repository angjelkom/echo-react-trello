import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const Todos = ({ todos, onClick, classes, deleteCompleted }) => {
    return (
      <>
      {
        todos.some(todo => todo.completed) && 
        <IconButton aria-label="Delete" className={classes.deleteIcon} onClick={() => deleteCompleted(todo.id)}>
        <DeleteIcon />
      </IconButton>
      }
        <List>
        {todos.map(todo => {
            return (
                <ListItem key={todo.id} className={classes.listItem}>
    <ListItemText primary={todo.text} />
    <ListItemSecondaryAction>
      <Checkbox
        onChange={event => onClick(todo.id)}
        checked={todo.completed}
      />
    </ListItemSecondaryAction>
  </ListItem>
            )
        })}
        </List>
        </>
    )
}


export default withStyles(styles)(Todos);