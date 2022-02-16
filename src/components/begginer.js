import {motion} from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';





function Begginer() {


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






  return <div ref={ref} id='beginner'>

    <h3>Beginner</h3>

    <div className='container'>
   <p>
     
  Begginer players are usually around the 600-1200 elo range. Some say they can start at an
  elo of 0. However, I think theres a big difference between players at the 0-600 level, than 
  the 600-1200 level. Players at this level can generally understand some basic concepts, such 
  as controlling the center, getting your pieces out, a decent understanding of opening princiles, 
  but still have not mastered them, or cant understand basic tactics, and the constant blundering 
  is stil horrendous. To the right, there is a link to a few videos to help players out at this level,
  both having Levy talk about the constant mistakes/atterns, yous see plaeyrs making at this level. 

  </p> 

  <div className='resources'>

  <ul>
    <motion.li 
     animate ={animation}
    whileHover={{scale: 1.3, 
      textShadow: "3px 3px 3px rgb(255, 255, 255)", 
      boxShadow: "3px 3px 3px rgb(55, 55, 55)"
    }}
    ><a href="https://www.youtube.com/watch?v=d5n_RuvnmCo&list=PLBRObSmbZluRBQOO_6FzyxQUaFyzusSl0" target="_blank">Gothams Guide</a></motion.li>
    <motion.li  animate ={animation} whileHover={{scale: 1.3, 
    textShadow: "0px 0px 8px rgb(255, 255, 255)", 
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    }}><a href="https://www.youtube.com/watch?v=GTJmUt8oyH8&t=2s" target="_blank">800 Elo Rating Climb</a></motion.li>
  </ul>
  </div>
  </div>
    </div>;
}

export default Begginer;
