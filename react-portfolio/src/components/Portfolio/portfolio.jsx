import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assest/images/course1.jpg'
import IMG2 from '../../Assest/images/course2.jpg'
import IMG3 from '../../Assest/images/course3.jpg'
import IMG4 from '../../Assest/images/course4.jpg'
import IMG5 from '../../Assest/images/course5.jpg'
import IMG6 from '../../Assest/images/course6.jpg'

const Portfolio = () => {
    return(
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>


       <div className="container portfolio__container">
       <article className='portfolio__item'>
           <div className="portfolio__item-image">
               <img src={IMG1} alt="" />
           </div>
           <h3>This is a Portfolio item title </h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' targent='_blank'>Github</a>
           <a href="https://dribble.com/SardiusJay" className='btn-primary' targent='_blank'> Live Demo </a>
           </div>

       </article>

       <article className='portfolio__item'>
           <div className="portfolio__item-image">
               <img src={IMG2} alt="" />
           </div>
           <h3>This is a Portfolio item title </h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' targent='_blank'>Github</a>
           <a href="https://dribble.com/SardiusJay" className='btn-primary' targent='_blank'> Live Demo </a>
           </div>

       </article>

       <article className='portfolio__item'>
           <div className="portfolio__item-image">
               <img src={IMG3} alt="" />
           </div>
           <h3>This is a Portfolio item title </h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' targent='_blank'>Github</a>
           <a href="https://dribble.com/SardiusJay" className='btn-primary' targent='_blank'> Live Demo </a>
           </div>

       </article>

       <article className='portfolio__item'>
           <div className="portfolio__item-image">
               <img src={IMG4} alt="" />
           </div>
           <h3>This is a Portfolio item title </h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' targent='_blank'>Github</a>
           <a href="https://dribble.com/SardiusJay" className='btn-primary' targent='_blank'> Live Demo </a>
           </div>

       </article>

      <article className='portfolio__item'>
           <div className="portfolio__item-image">
               <img src={IMG5} alt="" />
           </div>
           <h3>This is a Portfolio item title </h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' targent='_blank'>Github</a>
           <a href="https://dribble.com/SardiusJay" className='btn-primary' targent='_blank'> Live Demo </a>
           </div>

       </article>

       <article className='portfolio__item'>
           <div className="portfolio__item-image">
               <img src={IMG6} alt="" />
           </div>
           <h3>This is a Portfolio item title </h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com" className='btn' targent='_blank'>Github</a>
           <a href="https://dribble.com/SardiusJay" className='btn-primary' targent='_blank'> Live Demo </a>
           </div>

       </article>

           
       </div> 
        </section>

 	)
}

export default Portfolio