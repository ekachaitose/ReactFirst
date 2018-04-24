import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
class App extends Component {
  render() {
    return (
      <div>
        <Header currentUser="Ekkachai" isLoggedIn/>
        <div>Hello</div>
        <Footer/>
      </div>
    )
  }
}

export default App;
