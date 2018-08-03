import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {
  render() {
    return (
      <div className="Item">
      <a href={this.props.link}>
        <img className="Item-image" alt="" src={this.props.image}/>
        <div className="Item-div">
          <a className="Item-title">{this.props.title}</a>
          <br/>
          <a className="Item-tools">{this.props.tools}</a>
          <br/><br/>
          </div> 
          <a className="Item-desc">{this.props.description}</a>
        </a>  
      </div>
    );
  }
}
