import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
     const {activeNav, setActiveNav} = useState('#');
 return(
 	<nav>
      <a href="#home" onClick={() => setActiveNav('#home')} 
      className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDetail /></a>
      <a href="#service" onClick={() => setActiveNav('#service')}  className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
     
    </nav>

 	)
}

export default Nav