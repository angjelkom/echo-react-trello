import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { withRouter } from 'react-router-dom';


class Alert extends Component {

    state = {
        open: true,
      };
    
      handleClose = () => {
        this.setState({ open: false });
        this.props.history.replace('/');
      };

    render(){
        return (
            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Board with the provided ID does not exist.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        )
    }
}

export default withRouter(Alert);