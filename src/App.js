import React, { Component } from 'react';
import './App.scss';
import Text from './Text';

class App extends Component {
  state = {
    underline: false
  }

  handleClick = () => {
    this.setState({
      underline: !this.state.underline,
    })
  }

  render() {
     const text = 'Witaj na stronie';
  /* let classes = '';
     if(this.state.underline) classes+= ' line';
    if(text.length > 10) classes+= ' big'
 */

    const classes = ['one'];
    if(this.state.underline) classes.push('line');
    if(text.length > 10) classes.push('big')

    return (
      <div className='app' onClick={this.handleClick}>
        <h1 className={classes.join(' ')}>{text}</h1>
        <Text />
      </div>
    );
  }
}

export default App;
