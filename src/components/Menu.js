import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <a className={this.props.class}>{this.props.title}</a>
      </div>
    );
  }
}
