import React, {Component} from 'react';

export default class CoinFlip extends Component {
  constructor (props) {
    super (props);

    this.state = [
      'https://qph.fs.quoracdn.net/main-qimg-57e97e36918b359f28e86b8cbf567436.webp',
      'https://www.changechecker.org/umbraco/ImageGen.ashx?pad=true&constrain=false&height=250&width=250&image=/coin-images/27/England%20Three%20Lions.jpg',
    ];
    this.flipCoin = this.flipCoin.bind(this)
  }

  function flipCoin () =  {
    const randomInd = Math.floor(Math.random() * 2) 
    return randomInd
  }

  handleClick(){
      this.flipCoin()
  }

  render () {
    return (
      <div>
        <h1>Welcome to Coin Flip</h1>
        <img
          src= {this.state[randomInd]}
          alt="Coin"
        />
        <div>
        <button onClick = {this.handleClick}>Flip</button>
        </div>
      </div>
    );
  }
}
