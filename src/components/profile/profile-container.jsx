import React from 'react';
import { connect } from 'react-redux';
import { getProfileDataThunk } from "../../redux/profile-reducer";
import PostsContainer from './posts/posts-container';
import ProfileInfo from './profileInfo/profileInfo';
import { withRouter } from 'react-router';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileDataThunk(userId);
    }

    render() {
        
        return (
            <div>
                <ProfileInfo profilePage={this.props.profilePage}/>
                <PostsContainer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export default compose(connect(mapStateToProps, { getProfileDataThunk }), withRouter, withAuthRedirect)(ProfileContainer);