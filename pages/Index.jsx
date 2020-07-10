import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
//import { toggleTap, incrementCount, decrementCount } from '../redux/actions';
import Head from 'next/head';
import Button from 'components/button';
import Social from 'components/social';
import SpringImage from 'components/springimage';

import styles from './Index.scss';

class Index extends Component {
	static getInitialProps ({ reduxStore, req }) {
		const isServer = !!req

		return {}
	}

	static propTypes = {
		router: PropTypes.object,
	}

	state = {
		enter_water: false
	}

	constructor(props) {
		super(props);
	}

	// toggle = () => {
	// 	const { toggleTap } = this.props
	// 	toggleTap()
	// }

	// increment = () => {
	// 	const { incrementCount } = this.props
	// 	incrementCount()
	// }

	// decrement = () => {
	// 	const { decrementCount } = this.props
	// 	decrementCount()
	// }

	componentDidMount() {
		// WATER CODE
		this.key_value = {
			87: 'w', 65: 'a', 84: 't', 69: 'e', 82: 'r', 69: 'e', 88: 'x', 79: 'o', 68: 'd', 85: 'u', 83: 's'
		};
		this.key_seq = [
			'w', 'a', 't', 'e', 'r', 'e', 'x', 'o', 'd', 'u', 's'
		];
		this.key_position = 0;

		document.addEventListener('keydown', this.waterExodus);
	}

	waterExodus = e => {
		const key = this.key_value[e.keyCode];
		const required_key = this.key_seq[this.key_position];

		if (key === required_key) {
			this.key_position++;

			if (this.key_position === this.key_seq.length) {
				console.log('water exodus!!');

				this.setState({ enter_water: true });

				this.key_position = 0;
			}
		} else {
			this.key_position = 0;
		}
	}

	render() {
		const {
			router
		} = this.props;

		const text_logo_styles = {
			background: `url(static/leakybarrel-text-logo.png) center center / 100% no-repeat`
		};

		if (this.state.enter_water && !this.state.water_styles) {
			setTimeout(() => {
				this.setState({
					water_styles: {
						height: '100%',
						opacity: '1'
					}
				});
			}, 1000);
		}

		return (
			<>
				<section className={styles('main', 'container')}>
					<div className={styles('content')}>
						<h1 style={{display: 'none'}}>The Leaky Barrel</h1>
						{/*<div className={styles('text-logo')} style={text_logo_styles}/>*/}
						<SpringImage 
							className={styles('logo')}
							image_url='static/leakybarrel-full-logo.png' 
						/>
						{/*<p className={styles('description')}>I promise, the water's fine.</p>*/}
						<Button
							className={styles('buy-button')}
							text='SHOP NOW'
							url='https://theleakybarrel.shopsettings.com/'
						/>
						<div className={styles['social-buttons']}>
							<Social
								platforms={['facebook', 'instagram', 'email']}
								urls={['https://facebook.com/theleakybarrel', 'https://instagram.com/theleakybarrel', 'mailto:leakybarrel@gmail.com']}
								color={Social.Color.WHITE_TO_PURPLE}
							/>
						</div>
					</div>
				</section>
				<section className={styles('container', 'info')}>
					<div className={styles('content')}>
						<h2>Delivery</h2>
						<div className={styles('subcontent')}>
							<h3>Locations</h3>
							<div className={styles('description')}>If you are looking for delivery, we deliver to these zip codes:</div>
							<ul>
								<li>
									<p className={styles('label')}>$30 Minimum:</p>
									<p>11214, 11209, 11228, 11204</p>
								</li>
								<li>
									<p className={styles('label')}>$75 Minimum:</p>
									<p>11220, 11219, 11223</p>
								</li>
								<li>
									<p className={styles('label')}>$150 Minimum:</p>
									<p>11232, 11218, 11230, 11229, 11235, 11224</p>
								</li>
								<li>
									<div className={styles('delivery-disclaimer')}>If you fall out of these delivery zip codes please don’t hesitate to still call the shop at <a href='tel:7182560346'>(718) 256-0346</a></div>
								</li>
							</ul>
						</div>
						<div className={styles('subcontent')}>
							<h3>Hours</h3>
							<div className={styles('description')}>If you place an order outside of these hours, it will be delivered the next day.</div>
							<ul>
								<li>
									<p className={styles('label')}>Mon-Sat</p>
									<p>12PM-7PM</p>
								</li>
								<li>
									<p className={styles('label')}>Sun</p>
									<p>12PM-5PM</p>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles('line')} /> 
					<div className={styles('content')}>
						<h2>Store Hours</h2>
						<p className={styles('info-line')}>Monday - Saturday 11AM - 8PM</p>
						<p className={styles('info-line')}>Sunday 12PM - 6PM</p>
					</div>
					<div className={styles('line')} />
					<div className={styles('content')}>
						<h2>Contact</h2>
						<div className={styles('info-line')}>
							<div>
								<span className={styles('label')}>Phone:</span>
								<a href='tel:7182560346'>(718) 256-0346</a>
							</div>
							<div>
								<span className={styles('label')}>Email:</span>
								<a href='tel:mailto:leakybarrel@gmail.com'>leakybarrel@gmail.com</a>
							</div>
						</div>
					</div>
					<div className={styles('line')} />
					<div className={styles('content')}>
						<h2>Location</h2>
						<div className={styles('info-line')}>
							<a href='https://g.page/leakybarrel?share' target='_blank'>
							<p>7611 New Utrecht Ave</p>
							<p>Brooklyn NY 11214</p>
							</a>
						</div>
						<iframe 
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48458.66210363597!2d-74.07336944307528!3d40.61518381154548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245e47c504e13%3A0x770482d822d7a8ac!2sLeaky%20Barrel%20Wine%20And%20Spirits!5e0!3m2!1sen!2sus!4v1588207365588!5m2!1sen!2sus' 
							width='600' 
							height='450' 
							frameBorder='0' 
							allowFullScreen=''
							tabIndex='0'
						/>
					</div>
				</section>
				{this.state.enter_water &&
					<div className={styles('blue')} style={this.state.water_styles}>
						<div className={styles('medallion')} />
					</div>
				}
				
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		tap: state.tap,
		count: state.count
	}
}

const mapDispatchToProps = dispatch => {
	return {};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Index));
