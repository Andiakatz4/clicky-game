import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ImageCard from './components/imagecard';
import Game from './components/Game';

class App extends Component {
  state = {
    dataArray: [],
    score: 0,
    topScore: 0
  }

  handleClick(id) {
    console.log("hello");
  }

  render() {
    return (
      <Game />
      /* {this.state.dataArray.map(item, () => {
      <ImageCard 
        handleClick={this.handleClick}
        id={item.id}
        image={item.image}
      />
    })} */
      // </div>

    );
  }
}

export default App;
