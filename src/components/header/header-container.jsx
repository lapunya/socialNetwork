import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { setAuthUserDataThunk } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserDataThunk();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthUserDataThunk})(HeaderContainer);