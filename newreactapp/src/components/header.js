import React, {Component} from 'react';


class Header extends Component{

  state = {
    keywords:''
  }

  inputChanged(event)
  {
    
    this.setState({
      keywords: event.target.value
    });
  }

  render(){
    return (
      <header>
        <div className="logo">Logo</div>
        <input onChange={(event) => this.inputChanged(event)}/>
      </header>
    )
  }
}

export default Header;