import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './App.css';

class App extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(user);
    // ternaries are WTF: what ? true : false
    // { condition ? truevalue : falsevalue }
    return <>
      <h1>Music</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {isAuthenticated ? user.name : ''}
      {isAuthenticated ? <img src={user.picture} /> : ''}
    </>
  }
}
// call withAuth0 here to give me access to auth0 props
export default withAuth0(App);
