import React, { Component } from 'react';
import avatar from '../images/avatar.png';
import './Home.css';
import Menu from 'Menu';
import Social from 'Social';
import emoji from 'react-easy-emoji';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<header className="Home-header">
					<Link to="/">
						<Menu class="Menu-item active" title="margalit" />
					</Link>
					<Link to="/projects">
						<Menu class="Menu-item" title="projects" />
					</Link>
				</header>
				<img src={avatar} className="Home-avatar" alt="avatar" />

				<p className="Home-intro">
					What up! I'm Guy Margalit, a{' '}
					<a href="https://github.com/guymargalit" class="blue">
						software engineer
					</a>{' '}
					in Los Angeles, CA. I recently graduated from the University of Colorado Boulder with a degree in{' '}
					<a href="https://www.colorado.edu/aerospace/" class="orange">
						aerospace
					</a>{' '}
					engineering & pre-medicine {emoji('🚀')}
					<br />
					<br />
					While I enjoy engineering, I also spend a lot of my time writing & playing{' '}
					<a href="https://soundcloud.com/guymargalit" class="red">
						music {emoji('🎹')}
					</a>{' '}
					and filming{' '}
					<a href="https://www.youtube.com/channel/UCb4nW14snGHIvW0Uuq6sBww" class="green">
						videos {'📹'}
					</a>. I try to post as much as I can along with any other{' '}
					<Link to="/projects" class="purple">
						{' '}
						projects
					</Link>{' '}
					I'm working on.
					<br />
					<br />
					Some of the technologies I've worked with recently are React Native, Node.js, and PostgreSQL. Oh,
					and my past work includes{' '}
					<a href="https://jila.colorado.edu/perkins/" class="blue">
						Perkins Lab
					</a>,{' '}
					<a href="https://www.powermat.com/" class="blue">
						Powermat
					</a>, and{' '}
					<a href="http://www.shelfx.com/" class="blue">
						ShelfX
					</a>.
					<br />
					<br />
					I am currently exploring new opportunities and would love to chat!
				</p>
				<br />

				<Social />
				<br />
				<br />
				<a href="mailto:guy@margalit.com" className="Home-email">
					guy@margalit.com
				</a>
				<br />
				<h3>{emoji('🎉')}</h3>
			</div>
		);
	}
}
