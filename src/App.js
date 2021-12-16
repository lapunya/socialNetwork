import React from 'react';
import './App.css';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import { Route, withRouter } from 'react-router';
import Sidebar from './components/sidebar/sidebar';
import DialogsContainer from './components/dialogs/dialogs-container';
import UsersContainer from './components/users/users-container';
import ProfileContainer from './components/profile/profile-container';
import HeaderContainer from './components/header/header-container';
import Login from './components/login/login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader/>
    return (
      
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar/>
        <div className='app-wrapper-content'>
          <Route path='/login' render={ () => <Login/>} />
          <Route path='/profile/:userId?' render={ () => <ProfileContainer/>} />
          <Route path='/dialogs' render={ () => <DialogsContainer/>} />
          <Route path='/users' render={ () => <UsersContainer/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
      initialized: state.app.initialized
  }
}

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
