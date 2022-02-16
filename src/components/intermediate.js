import {motion} from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';




function Intermediate() {

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


  return <div ref={ref} id='intermediate'>
  <h3>Intermediate</h3>
  <div className='container'>
   <p>
     
    Intermediates are different from beginners in chess mainly with there basic understanding of fundamental principles
    and there basic to advanced understanding of tactics. This is an elo range of anywhere from 1200-1800, 1800 being very
    closed to advanced. This is a great level to master as much tactiacl puzzles as possible, and to gain as much 
    knowledge with opening theory. Generally players at this level understand fundamental principles that the noobs and 
    beginners did not understand yet. Such as controlling the center developing your pieces, etc. In order to move 
    from this level to advanced however, these players need to always be studying to improve, with tactical puzzles 
    and opening knowledge. To the right are listed two videos to help these players get better.

  </p> 
  <div className='resources'>
  <ul>
  <motion.li animate = {animation} whileHover={{scale: 1.2, color: '#f8e112'}}><a href="https://www.youtube.com/watch?v=X21uL9lbHbw&t=2952s" target="_blank">Gothams 1200 elo plus Guide</a></motion.li>
    <motion.li 
      animate = {animation}
      whileHover={{scale: 1.2, color: '#f8e112'}} >
      <a href="https://www.youtube.com/watch?v=yfDREcw5GBM&t=1535s" target="_blank">Gothams 1600 elo Guide</a></motion.li>
   
  </ul>
  </div>
  </div>
  </div>;
}

export default Intermediate;





