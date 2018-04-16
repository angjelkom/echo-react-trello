import { connect } from 'react-redux';
import NewBoard from '../components/NewBoard';
import { NEW_BOARD } from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: name => dispatch({type: NEW_BOARD, name})
    }
}

export default connect(
    null,
    mapDispatchToProps
)(NewBoard);