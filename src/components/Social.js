import React, { Component } from 'react';
import git from '../images/social/git.svg';
import git_over from '../images/social/git0.svg';
import lin from '../images/social/in.svg';
import lin_over from '../images/social/in0.svg';
import card from '../images/social/cardboard.svg';
import card_over from '../images/social/cardboard0.svg';
import spot from '../images/social/spotify.svg';
import spot_over from '../images/social/spotify0.svg';
import youtube from '../images/social/youtube.svg';
import youtube_over from '../images/social/youtube0.svg';
import './Social.css';

export default class Social extends Component {

  render() {
    return (
      <ul className="Social">
        <li>
          <a href="https://github.com/guymargalit">
            <img onMouseOver={e => e.currentTarget.src=git_over} onMouseLeave={e => e.currentTarget.src=git} className="Social-image" src={git} alt="Github"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gmargalit/">
            <img onMouseOver={e => e.currentTarget.src=lin_over} onMouseLeave={e => e.currentTarget.src=lin} className="Social-image" src={lin} alt="LinkedIn"/>
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/artist/0FpRFbnLsMz9MedG5tl0xE?si=_RTX3HInRsCEXC3fhOZRJg">
            <img onMouseOver={e => e.currentTarget.src=spot_over} onMouseLeave={e => e.currentTarget.src=spot} className="Social-image" src={spot} alt="Spotify"/>
          </a>
        </li>
        <li>
          <a href="https://vr.margalit.com/">
            <img onMouseOver={e => e.currentTarget.src=card_over} onMouseLeave={e => e.currentTarget.src=card} className="Social-image" src={card} alt="VR"/>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/itsguymargalit">
            <img onMouseOver={e => e.currentTarget.src=youtube_over} onMouseLeave={e => e.currentTarget.src=youtube} className="Social-image" src={youtube} alt="YouTube"/>
          </a>
        </li>
      </ul>
    );
  }
}