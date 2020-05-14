import React, { Component } from 'react';
import './App.css';
import '../card/Card.css';
import '../table/Table.css';
import '../odds/Odds.css';
import '../payouts/Payouts.css';
import '../credits/Credits.css';
import '../currentHand/CurrentHand.css';
import '../bestPlays/BestPlays.css';
import Table from '../table/Table.js';
import Odds from '../odds/Odds.js';
import Payouts from '../payouts/Payouts.js';
import Credits from '../credits/Credits.js';
import CurrentHand from '../currentHand/CurrentHand.js';
import BestPlays from '../bestPlays/BestPlays.js';

export default class App extends Component {
  constructor() { 
    super();

    this.state = { 
      credits: 100,
      bet: 1,
      gameState: "START",
      handValue: ""
    }
  }
  render() { 
    return (
      <div>
        <h2 className="peeker">Peeker</h2>
        <div className="comWrapper">
          <Odds className="o"/>
          <Table className="t" credits={this.state.credits} bet={this.state.bet} gameState={this.state.gameState}
                                updateCredits={this.updateCredits}
                                updateBet={this.updateBet}
                                updateGameState={this.updateGameState}  
                                updateHandValue={this.updateHandValue} />
          
          <Payouts className="p" bet={this.state.bet}/>
          <Credits className="c" credits={this.state.credits} bet={this.state.bet} updateCredits={this.updateCredits}
                updateBet={this.updateBet} />
          <CurrentHand className="ch" handValue={this.state.handValue}/>
          <BestPlays className="bp"/>
        </div>
      </div>
    );
  }

  updateCredits = (change) => {
    this.setState({credits: this.state.credits + change});
  }

  updateBet = (bet) => {
    this.setState({bet});
  }

  updateGameState = (gameState) => {
    this.setState({gameState});
  }

  updateHandValue = (handValue) => { 
    this.setState({handValue});
  }
}