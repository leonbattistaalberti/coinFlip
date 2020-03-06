import React, {Component} from 'react';

export default class Coin extends Component {
  render () {
    return (
      <div>
        <img
          style={{maxWidth: '100px', maxHeight: '100px'}}
          src={this.props.img.imgSrc}
        />
      </div>
    );
  }
}
