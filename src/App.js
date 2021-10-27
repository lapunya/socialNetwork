import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import DialogsContainer from './components/dialogs/dialogs-container';
import UsersContainer from './components/users/users-container';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile/>} />
          <Route path='/dialogs' render={ () => <DialogsContainer/>} />
          <Route path='/users' render={ () => <UsersContainer/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
