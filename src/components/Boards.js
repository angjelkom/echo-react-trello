import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
    root: {
        flexGrow: 1
      },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    }
};

const Boards = ({ boards, history, classes, clearAppBarTitle, deleteBoard }) => {

    clearAppBarTitle();

    return (
        <div className={classes.root}>
      <Grid container spacing={16} justify="center">
                {
                    boards.map((board, i) =>

                        <Grid key={'board-' + i} item xs={6} sm={3}>

                            <Card className={classes.card}>
                                {board.image && <CardMedia
                                    className={classes.media}
                                    image={board.image}
                                    title="Contemplative Reptile"
                                />}
                                <CardContent>
                                    <Typography type="headline" component="h2">
                                        {board.name}
                                    </Typography>
                                    <Typography component="p">
                                        Some description about the board
              </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" onClick={() => history.replace('/board/' + board.id)}>
                                        Open
              </Button>
              <Button color="primary" onClick={() => deleteBoard(board.id)}>
                                        Delete
              </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    )
};

export default withStyles(styles)(Boards);