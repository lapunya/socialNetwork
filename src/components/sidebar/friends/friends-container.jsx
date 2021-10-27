import { connect } from 'react-redux';
import Friends from './friends';

let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebar.friendsData
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;