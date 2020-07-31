import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import OrdersView from './components/OrdersView'
import Login from './components/employeeLogin'


export default class App extends React.Component {
  state = {
    user: this.props.user,
    message: '',
    order: '',
  };

  setUser = user => {
    this.setState({
      user: user,
    });
  };

  render = () => {
    return (
      <div className='App'>
        <Route exact path='/' render={props => <Login setUser={this.setUser} user={this.state.user} {...props} />} />
        <Route exact path='/orders' render={props => <OrdersView setUser={this.setUser} {...props} />} />
      </div>
    );
  };
}
