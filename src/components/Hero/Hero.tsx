import React from 'react';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import calories from '../../assets/calories.png';
import './Hero.css';

const Hero = () => {
  return (
	<div className="hero">
<div className="left-header">
	{/*LeftHeader component*/}
	<Header />
	{/*Animated heading*/}
	<div className="animatedDiv">
		<div>
		</div>
		<span>the best fitness club in Ife</span>
	</div>
	{/*Hero Text*/}
	<div className="heroText">
		<div>
		<span className="strokeText">Space </span>
		<span>Your</span>
		</div>
	<div>
		<span>Ideal Body</span>
	</div>
	<div>
		<span>In here we will help you to shape and build your ideal body to the fullest</span>
	</div>
	</div>
	{/*Hero stats figures*/}
<div className="statsFigures">
	<div>
	<span>+140</span>
	<span>Expert Coaches</span>
	</div>
	<div><span>+500</span>
	<span>Members Joined</span>
	</div>
	<div><span>+50</span>
	<span>Fitness Programs</span>
	</div>
</div>
	{/*Right Hero Buttons*/}
<div className="heroButton">
<button className="btn">Get Started</button>
<button className="btn">Learn More</button>
</div>
</div>
<div className="right-header">
<button className="btn">Join Now</button>
<div className="heartRate">
	<img src={Heart} alt="heart-rate"/>
	<span>Heart Rate</span>
	<span>180 bpm</span>
</div>
</div>
	{/*Hero Images*/}
	<img src={hero_image} alt="" className="heroImage" />
	<img src={hero_image_back} alt="" className="heroImageBack" />
	<div className="calories">
		<img src={calories} alt="" />
		<div className="">
		<span>Calories Burned</span>
		<span>180kcal</span>
		</div>

	</div>
	</div>

  )
}

export default Hero