import React, { Component } from 'react';
import Todos from '../containers/Todos';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = theme => ({
    root: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: theme.spacing.unit * 2,
    },
    typography: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        display: 'inline-block'
    },
    textField: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        width: 200,
      },
      deleteIcon: {
          verticalAlign: 'sub'
      }
  });

class Lists extends Component {

    render(){
        const { lists, todos, onKeyPress, classes, deleteList, boardId } = this.props;
        return (
        <Grid container spacing={16} justify="center">
        {
            lists.map(list => 
                <Grid key={list.id} item xs={6} sm={3}>
                <Paper className={classes.root} elevation={4}>
                    
                <Typography type="headline" component="h3" className={classes.typography}>
                {list.title}
                </Typography>
                  <IconButton aria-label="Delete" className={classes.deleteIcon} onClick={() => deleteList(list.id)}>
                    <DeleteIcon />
                  </IconButton>
                    <TextField
                        id="todo"
                        label="Todo Title"
                        margin="normal"
                        className={classes.textField}
                        onKeyPress={event => onKeyPress(event, list.id, boardId)}
                    />
                    <Todos listId={list.id} />
                    </Paper>
                    </Grid>
        )
        }
        </Grid>
        )
    }
}

export default withStyles(styles)(Lists);