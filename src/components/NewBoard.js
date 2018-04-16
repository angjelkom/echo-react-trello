import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


const styles = theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },

    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
});

class NewBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, name: '' };
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleCreate = event => {
        if(event.key === 'Enter' || event.type === 'click'){
            
            if(this.state.name){
                this.props.onClick(this.state.name);
                this.setState({ open: false });
            }
        }
    }

    render() {

        const { classes } = this.props;

        return (
            <>
            <Button variant="fab" color="secondary" aria-label="add" className={classes.fab} onClick={() => this.setState({ open: true })}><AddIcon /></Button>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create Board</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        What do we call it?
            </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="boardName"
                        label="Board Name"
                        type="text"
                        fullWidth
                        onChange={event => this.setState({ name: event.target.value })}
                        onKeyPress={this.handleCreate}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={this.handleCreate} color="primary">
                        Create
            </Button>
                </DialogActions>
            </Dialog>
            </>
        )
    }
}
export default withStyles(styles)(NewBoard);