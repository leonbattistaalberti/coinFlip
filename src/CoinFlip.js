import React, {Component} from 'react';
import {choice} from './choice';
import Coin from './Coin';

export default class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'heads',
        imgSrc: 'https://qph.fs.quoracdn.net/main-qimg-57e97e36918b359f28e86b8cbf567436.webp',
      },
      {
        side: 'tail',
        imgSrc: 'https://www.changechecker.org/umbraco/ImageGen.ashx?pad=true&constrain=false&height=250&width=250&image=/coin-images/27/England%20Three%20Lions.jpg',
      },
    ],
  };
  constructor (props) {
    super (props);

    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin () {
    const newCoin = choice (this.props.coins);
    this.setState (st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
      };
    });
  }

  handleClick (e) {
    this.flipCoin ();
  }

  render () {
    return (
      <div>
        <h1>Welcome to Coin Flip</h1>
        {this.state.currCoin !=null && <Coin img={this.state.currCoin} />}
        <h4>Number of Flips {this.state.nFlips}</h4>
        <div>
          <button onClick={this.handleClick}>Flip</button>
        </div>
      </div>
    );
  }
}
