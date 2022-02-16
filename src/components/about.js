import {motion} from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';



function About() {

const{ref, inView} = useInView(); 
const animation = useAnimation(); 


useEffect(() => {
      console.log('use effect', inView)
    if(inView) {
      animation.start({
        x:0, 
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
    }
    if(!inView) {
      animation.start({x:'-100vw'})
  }
}, [inView])


  return <div id='about'>

  <div ref={ref} className='container'>

      <h1>About ChessGuide</h1>
      <motion.p
      animate={animation}
      >
       My name is Eshwar! I built this guide for players of all
        levels to see where they are, and what resources they can 
        use to get better! I am currently at 1600 elo on chess.com, 
        and I only started playing 8 months ago, so I thought people 
        can benefit from some of the tips that have helped me on my
         journey!
         </motion.p>
  </div>
  </div>;
}

export default About;

