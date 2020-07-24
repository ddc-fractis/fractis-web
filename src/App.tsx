import './App.css';
//import './goodtimes_webkit/stylesheet.css'
import applogo from './Images/App_Icon_WithoutBackground.png'
import Home from './Home';

import React, { Component } from 'react'
import Support from './Support';
import Privacy from './Privacy';

interface State {
  selectedPage: string;
}

export default class App extends Component<{},State> {

  constructor(props: any){
    super(props);
    this.state = {
      selectedPage : "Home"
    }
  }

  onNavigationItemClick = (page: string): void => {
    this.setState({ selectedPage: page});
  }

  onClickHome = (): void => {
    this.setState({ selectedPage: "Home"});
  }

  onClickPrivacy = (): void => {
    this.setState({ selectedPage: "Privacy"});
  }

  onClickSupport = (): void => {
    this.setState({ selectedPage: "Support"});
  }

  getNavItemColor = (isSelected: boolean): string => {
    if(isSelected){
      return "white"; //"rgb(64,253,245)"
    }
    else{
      return "rgb(47,215,252)"
    }
  }

  render() {
    return (
      <div className="wrapper">
      <div className="navigation">
        <img 
          onClick={this.onClickHome} 
          className="navigation-item app-logo" 
          src={applogo} 
          alt="logo" 
        /> 
        <div 
          onClick={this.onClickHome} 
          style={{color: this.getNavItemColor(this.state.selectedPage === "Home")}}
          className="navigation-item"
        >
          Home
        </div>
        <div 
          onClick={this.onClickSupport}
          style={{color: this.getNavItemColor(this.state.selectedPage === "Support")}} 
          className="navigation-item"
        >
          Support
        </div>
        <div 
          onClick={this.onClickPrivacy}
          style={{color: this.getNavItemColor(this.state.selectedPage === "Privacy")}} 
          className="navigation-item"
        >
          Privacy
        </div>
      </div>

      {this.state.selectedPage === "Home" &&
        <Home/>
      }
      {this.state.selectedPage === "Support" &&
        <Support/>
      }
      {this.state.selectedPage === "Privacy" &&
        <Privacy/>
      }

      <aside className="aside aside-1"/>
      <aside className="aside aside-2"/>
      {/* <footer className="footer">Footer</footer> */}
    </div>
    )
  }
}



//Use this for background
/*
<header className="App-header">
        Use this for background 
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} alt="logo" />
        <div>Test</div>
      </header>
*/
