import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import background from '../../assets/mixkit-bubbles-rising-in-water-178.mp4'
import card from '../../assets/creditcard.svg'
import './Hero.css'

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src={background} autoPlay loop muted />
			<Container>
				<MainHeading>A CREDIT CARD THAT SUITS ALL YOUR NEEDS</MainHeading>
				<HeroText>
                Empower your lifestyle with our premium credit card and recieve unparalleled rewards.
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
				<div className="card-image"><img className='card' src={card} alt="" /></div>
				
			</Container>
		</HeroSection>
	);
};

export default Hero;