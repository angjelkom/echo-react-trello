import { connect } from 'react-redux';
import TopBar from '../components/TopBar';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return {
        boardTitle: state.title
    }
}

export default withRouter(connect(
    mapStateToProps
)(TopBar));