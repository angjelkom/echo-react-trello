import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { TOGGLE_TODO, DELETE_COMPLETED } from '../actions';


const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos.filter(list => list.listId === ownProps.listId)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: todoId => {
            dispatch({type: TOGGLE_TODO, todoId });
        },
        deleteCompleted: todoId => {
            dispatch({type: DELETE_COMPLETED, todoId});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);