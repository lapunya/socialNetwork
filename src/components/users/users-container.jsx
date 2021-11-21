import React from "react";
import { connect } from "react-redux";
import { getUsersThunkCreator, pageChangeThunkCreator, followThunkCreator } from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize); 
    }

    onPageChanged = (el) => {
        this.props.pageChangeThunkCreator(el, this.props.pageSize); 
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader/> : null}
            <Users 
                onPageChanged={this.onPageChanged} 
                followThunkCreator={this.props.followThunkCreator}
                currentPage={this.props.currentPage}
                totalCount={this.props.totalCount} 
                pageSize={this.props.pageSize}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, 
    {
        getUsersThunkCreator,
        pageChangeThunkCreator,
        followThunkCreator
    }
)(UsersContainer);


// let mapDispatchToProps = (dispatch) => {
//     return {
//         switchFollow: (userId) => {
//             dispatch(toggleAC(userId));
//         },
        
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },

//         getPagesCount: (pagesCount) => {
//             dispatch(getPagesCountsAC(pagesCount));
//         },

//         getUserLimit: (limit) => {
//             dispatch(getUserLimitAC(limit));
//         },
        
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },

//         toggleLoading: (isLoading) => {
//             dispatch(toggleLoadingAC(isLoading));
//         }

//     }
// };