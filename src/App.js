import './App.css';
import Noob from './components/noob';
import Begginer from './components/begginer';
import Intermediate from './components/intermediate';
import Advanced from './components/advanced';
import Header from './components/header';
import About from './components/about';
import ScrollToTOp from './scroll/scrolltotop';
import { animateScroll as scroll} from 'react-scroll';
import {FaArrowUp} from "react-icons/fa"; 



function App() {
  return (



    <div className="App">    
     <Header/>

      <Noob/>
     
      <Begginer/>
    
      <Intermediate/>
  
      <Advanced/>
       

      <About/>
      
      <FaArrowUp className='up' onClick={() => {
        scroll.scrollToTop()
      }}></FaArrowUp>
     
      </div>




  );
}

export default App;
