import React from 'react';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
 import About from  './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Service from './components/Service/service.jsx';
import Portfolio from './components/Portfolio/portfolio';
{/**import Experience from './components/Experience/experience.jsx'
import Testimonals from './components/Testimonals/testimonals'**/}


const App = () => {
	return (
		<>
		<Header />
		<Nav />
		<About />
		<Contact />
		<Footer />
		<Service />
		<Portfolio />
	{/**<Experience />
		<Testimonal />**/}
		</>

		)
}


export default App;
