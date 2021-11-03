import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import { toggleFollow, setUsers, getPagesCount, getUserLimit, setCurrentPage, toggleLoading } from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleLoading(true);
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleLoading(false);
            this.props.setUsers(response.data.items);
            this.props.getPagesCount(response.data.totalCount);
            // this.props.getUserLimit(response.data.pageSize);
        })
            
    }

    onPageChanged = (el) => {
        this.props.setCurrentPage(el);
        this.props.toggleLoading(true);
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleLoading(false);
            this.props.setUsers(response.data.items);
            // this.props.getUserLimit(response.data.pageSize);
        })
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader/> : null}
            <Users 
                onPageChanged={this.onPageChanged} 
                currentPage={this.props.currentPage}
                totalCount={this.props.totalCount} 
                pageSize={this.props.pageSize} 
                switchFollow={this.props.switchFollow} 
                users={this.props.users}
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
        isLoading: state.usersPage.isLoading
    }
};

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



export default connect(mapStateToProps, 
    {
        toggleFollow,
        setUsers,
        getPagesCount,
        getUserLimit,
        setCurrentPage,
        toggleLoading
    }
)(UsersContainer);