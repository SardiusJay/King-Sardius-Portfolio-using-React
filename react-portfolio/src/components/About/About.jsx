import React from 'react'
import './About.css'
import ME from '../../Assest/images/ME.png'
import {FaAward} from 'react-icons/fa'
import {FiUserCheck} from 'react-icons/fi'
import {CgAwards} from 'react-icons/cg'

const About = () => {
	return (
		<section id="About">
		  <h5> Get to Know </h5>
		<h2> About Me </h2>

		<div className= "container about__container">
			<div className= "about__me">
				<div className= "about__me-image">
					<img src={ME} alt="img" />
				</div>
			</div>

			<article className='about__card'>
			<FaAward className='about__icon'/>
			<h5> Experience </h5>
			<small>3+ Years Working</small>	
			</article>

			<article className='about__card'>
			<FiUserCheck className='about__icon'/>
			<h5> Clients </h5>
			<small>50+ Years Worldwide</small>	
			</article>

		
			<article className='about__card'>
			<CgAwards className='about__icon'/>
			<h5> Projects </h5>
			<small>10+ Completed</small>	
			</article>
			</div>

			<p> 'm passionate about building good User Interface(UI) for Clients, i work with open source Project and Am passionate about building other tech youmg folks
			lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui lorem ipsum dolr 
			</p>
				
				<a href="#contact" className='btn btn-primarys'> Let's Talk </a>
		</section>
		 
		

		)
}


export default About