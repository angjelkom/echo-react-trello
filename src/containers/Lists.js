import { connect } from 'react-redux';
import Lists from '../components/Lists';
import { NEW_TODO, DELETE_LIST } from '../actions';


const mapStateToProps = (state, ownProps) => {
    return {
        lists: state.lists.filter(list => list.boardId === ownProps.boardId)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onKeyPress: (event, listId, boardId) => {
            if(event.key === 'Enter'){
                dispatch({type: NEW_TODO, text: event.target.value, listId, boardId})
                event.target.value = '';
            }
        },
        deleteList: listId => {
            dispatch({type: DELETE_LIST, listId})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lists);