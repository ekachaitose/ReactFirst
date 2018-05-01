import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTime : 0
    }
    this.handleFooterClicked = this.handleFooterClicked.bind(this)
  }
  handleFooterClicked(time){
    this.setState({currentTime: time})
  }
  render() {
    let {currentTime} = this.state
    return (
      <div>
        <Header currentUser="Ekkachai" isLoggedIn/>
        <div>currentTime  = {currentTime}</div>
        <Footer onTimerClicked={this.handleFooterClicked}/>
      </div>
    )
  }
}

export default App;
