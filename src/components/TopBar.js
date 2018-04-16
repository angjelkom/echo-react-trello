import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
    flex: {
        flex: 1
    }
  });

const TopBar = ({ classes, title, boardTitle, history }) => (
    <AppBar position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            Trello
          </Typography>
          <Typography type="subheading" color="inherit" className={classes.flex}>
            {boardTitle}
          </Typography>
          <Button color="inherit" onClick={() => history.replace('/')}>Home</Button>
        </Toolbar>
      </AppBar>
)

export default withStyles(styles)(TopBar);