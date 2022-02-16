import {motion} from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';




function Noob() {



  const{ref, inView} = useInView(); 
  const animation = useAnimation();

  useEffect(() => {
    if(inView) {
        animation.start({x: 0, transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
       });

      }
  
    if(!inView) {
      animation.start({x: '-100vw'})

    }
  }, [inView]); 




  return <div ref={ref} id='noob'>

    <h3>Noob</h3>

    <div className='container'>
   <p>
    Noob is not said to discourage anyone, we all start somewhere! We just had to differentiate 
    a begginer between someone who is a total begginer. Meaning they either do not know how the 
    pieces move, or they simply cant get better no matter how much they play or practice.
    Something I have seen be the main issue for noobs is that they have no idea about the fundamental 
    basic principles of chess, and they always just play random moves based off of there emotions in 
    the moment. Listed to the right are two resources that should help you understand the basic 
    principles of chess, and how understanding them are the only way that you can get better. 
  </p> 

  <div className='resources'>

  <ul>
    <motion.li 
      whileHover={{scale: 1.3}}
      animate= {animation}

    ><a href="https://www.youtube.com/watch?v=OCSbzArwB10" target="_blank">Gothams Guide</a></motion.li>
    <motion.li 
    animate= {animation}
    whileHover={{scale: 1.3, 
    textShadow: "0px 0px 8px rgb(255, 255, 255)", 
    boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}><a href="https://www.chessstrategyonline.com/content/tutorials/how-to-start-a-game-of-chess-opening-principles" target="_blank">Opening Principles</a></motion.li>
  </ul>
  </div>
  </div>
    </div>
}

export default Noob;
