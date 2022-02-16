import {motion} from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';


function Advanced() {


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





  return <div ref={ref} id='advanced'>


    <h3>Advanced</h3>

    <div className='container'>
   <p>
     
  As with any skil level, the beter you get, the harder it is to get better! Players that are considered
  "advanced" are inbetween the 1800-2200 level(anything above that is considered master). Players over here 
  have a perfect understanding of the fundamentals, and have mastered quiet a few openings. Tacticaal puzzles at
  this level are still something that should constantly be practiced. However, opening theory and knowledge is what 
  seperates players at this level. To the right are a couple vidoes of Levy battling some players at this level 
  and exposing there mistakes!!

  </p> 

  <div className='resources'>

  <ul>  
    <motion.li 
    animate = {animation}
    whileHover={{scale: 1.3, 
      textShadow: "3px 3px 3px rgb(255, 255, 255)", 
      boxShadow: "3px 3px 3px rgb(55, 55, 55)"
    }}
    
    ><a href="https://www.youtube.com/watch?v=wWkL_40ZPa4&t=1809s" target="_blank">Gothams 2000 elo Guide</a></motion.li>
    <motion.li animate = {animation} whileHover={{scale: 1.3, 
    textShadow: "0px 0px 8px rgb(255, 255, 255)", 
    boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}><a href="https://www.youtube.com/watch?v=NKCpN1GWDGs&t=418s" target="_blank">Gothmams 2200 elo guide</a></motion.li>
  </ul>
  </div>
  </div>

 
</div>

}

export default Advanced;
