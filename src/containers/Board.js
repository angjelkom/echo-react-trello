import { connect } from 'react-redux';
import Board from '../components/Board';
import { NEW_LIST, BOARD_TITLE } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        board: state.boards.find(board => board.id == ownProps.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        onKeyPress: (event, boardId) => {
            if(event.key === 'Enter'){
                dispatch({type: NEW_LIST, title: event.target.value, boardId})
                event.target.value = '';
            }
        },
        setAppBarTitle: title => {
            dispatch({ type: BOARD_TITLE, title });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);