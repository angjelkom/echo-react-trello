import { connect } from 'react-redux';
import Boards from '../components/Boards';
import { withRouter } from 'react-router-dom';
import { BOARD_TITLE, DELETE_BOARD } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        boards: state.boards
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clearAppBarTitle: () => {
            dispatch({type: BOARD_TITLE, title: ''})
        },
        deleteBoard: boardId => {
            dispatch({type: DELETE_BOARD, boardId})
        }
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Boards)
);