import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icon/bs'


const Experience = () => {
    return(
        <section id="experience">
        <h5>What Skill I Have</h5>
        <h1>My Experience</h1>

         {/*Frontend Development*/}
        <div className="container experience__container">
         <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                  <h4>CSS</h4>
                  <small className="text-light">intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">intermediate</small>
                  </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Reactjs</h4>
                  <small className="text-light">intermediate</small>
              </article>
         </div>
         

         {/* Backend Development*/}
         <div className="experience__Backend">
         <h3> Backend Development</h3>
              <div className="experience__content">
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>HTTP</h4>
                  <small className="text-light">Experienced</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>SQL</h4>
                  <small className="text-light">intermediate</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>PHP</h4>
                  <small className="text-light">Experienced</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>NODEJS</h4>
                  <small className="text-light">Experienced</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>ExpressJs</h4>
                  <small className="text-light">intermediate</small>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Python</h4>
                  <small className="text-light">Basic</small>
              </article>
          </div>
         </div>
         

         {/*Creative design*/}
         <div className="experience__Creative Designer">
         <h3>Creative Designer</h3>
              <div className="experience__content">
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Corel Draw</h4>
                  <small className="text-light">Experienced</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Adobe Illustator</h4>
                  <small className="text-light">intermediate</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Adobe Photoshop</h4>
                  <small className="text-light">intermediate</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>UI/UX design</h4>
                  <small className="text-light">intermediate</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Figma</h4>
                  <small className="text-light">Experienced</small>
             </article>
         </div>


          {/*Technical Writing*/}
         <div className="experience__Creative Designer">
         <h3>Technical Writing</h3>
              <div className="experience__content">
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Technical Content</h4>
                  <small className="text-light">Experienced</small>
              </article>
              <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Content Creaion</h4>
                  <small className="text-light">intermediate</small>
              </article>
          </div>
         </div>
        </div>

       </section>

 	)
}

export default Experience