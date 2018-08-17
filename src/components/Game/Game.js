import React, { Component } from "react";
import cards from "../../cards.json";
class Game extends Component {

    state = {
        animals: cards
    }

    render() {
        return (
            <div className="container">
                {this.state.animals.map(animal => (
                    <div className="col-sm-6-animal-card">
                        <p>{animal.name}</p>
                        <img src={animal.image} />
                    </div>
                ))}
            </div>
            )
    }
}    

export default Game;