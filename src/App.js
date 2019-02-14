import React, { Component } from 'react';
import './App.css';
import Cards from "./cards.json";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";

class App extends Component {

  state = {
    Cards,
    clicked: [],
    score: 0,
    Best: 0,
    message: "",
  };
  
  clickPicture = id => {
    const shuffledArray = this.shuffleArray(Cards);
    this.setState({Cards: shuffledArray});

    if (this.state.clicked.includes(id)) {
      this.setState({ score: 0, clicked: [], message: "Game Over. Click an image to start again!", });
    }
    else {
      this.setState({
        clicked: this.state.clicked.concat([id]),
        score: this.state.score + 1,
        message: "Correct",
        
      });
    } 
  
    if (this.state.score === 12) {
      this.setState ({message: "You Win!"});
      console.log("You win");
    }

    if (this.state.score > this.state.Best) {
      this.setState({ Best: this.state.score });
    }
  
  }
  shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const w = Math.floor(Math.random() * (i + 1));
          [array[i], array[w]] = [array[w], array[i]];
      }
      return array;
  }

  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">DBZ Clicky-Game</span>
       </nav>
       <h3> 
          <p><strong>Score: {this.state.score} | Best: {this.state.Best}</strong></p>
          <p><strong>{this.state.message}</strong></p>
        </h3>
               <Wrapper
        shakeWrapper = {this.state.shakeit}
        pictures=
          {this.state.Cards.map(Cards => (
            <Card
              clickPicture={this.clickPicture}
              id={Cards.id}
              key={Cards.id} 
              name={Cards.name}
              image={Cards.image}
            />
          ))}
        />
        <footer>
          <p>Code can be found here : <a href="https://github.com/WyattLaneReiman/Clicky-Game"> GitHub</a></p>
          <hr></hr>
          <p>Copyright &copy;</p>
        </footer>
      </div>
    );
  }
}

export default App;
