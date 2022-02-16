import Logo from '../images/ChessLogo.jpg'
import React, {forwardRef, useRef, useState} from 'react';
import {Link} from 'react-scroll'
import {motion} from 'framer-motion'



function Header() {

  
  return (
   <div>
    <div className='header'> 
    <img src={Logo}></img>
    <motion.h1 transition={{type: 'tween', delay: 0.3, stiffness: 200, duration: 1.5 }}
                            initial= {{y: -250}}
                            animate={{marginBottom: 40, opacity: 0.6, fontSize: 50, x: 26, y: 10}} 
                           className='main-h1'>
             Tell Us Your Level!
    </motion.h1>
     <Link to='about' smooth={true} duration={900}><motion.button className='btn'>
       ChessGuide
     </motion.button></Link>
    </div>
    <div className='survey'>
  
       <h3>Noob(0-700 elo)</h3>
        <Link to='noob' smooth={true} duration={1000}>
        <br/><br/>
          <motion.button className='btn' animate={{opacity: 0.6, scale: 1.3}}>
              Click Here
          </motion.button>
            </Link>
        <br/><br/>
        <h3>Begginer(700-1200 elo)</h3>
       <Link to='beginner' smooth={true} duration={1400}>
       <br/><br/>
       <motion.button className='btn' animate={{opacity: 0.6, scale: 1.3}}>
              Click Here
          </motion.button>
          </Link>
       <br/><br/><br/>
       <h3>Intermediate(1200-1800 elo)</h3>
        <Link to='intermediate' smooth={true} duration={1700}>
        <br/><br/>
        <motion.button className='btn' animate={{opacity: 0.6, scale: 1.3}}>
              Click Here
          </motion.button>
          </Link>
        <br/><br/>
        <h3>Advanced (1800-2200 elo)</h3>
       <Link to='advanced' smooth={true} duration={1800}>
       <br/><br/>
       <motion.button className='btn' animate={{opacity: 0.6, scale: 1.3}}>
              Click Here
          </motion.button>
         </Link> 
       <br/><br/>
     </div>
     </div>
  );
}
export default Header;
