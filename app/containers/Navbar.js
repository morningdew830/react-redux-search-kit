import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
    constructor(props){
    super();
    this.state = {
      selected:'Home'
    };
    this.onClickChangeActiveState = this.onClickChangeActiveState.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  onClickChangeActiveState(filter){
    this.setState({selected  : filter});
  }
  isActive(value){
    return ((value===this.state.selected) ?'active':'none');
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav" >
            <li  className={this.isActive('Home')} onClick={(evt)=>{this.onClickChangeActiveState('Home')}}><Link to='/'>Home </Link></li>
            <li  className={this.isActive('About')}  onClick={(evt)=>{this.onClickChangeActiveState('About')}}><Link to='about'>About </Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
