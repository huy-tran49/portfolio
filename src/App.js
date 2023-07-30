import './App.css';
import Navigation from './components/navbar';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';


function App () {
  return (
    <>
      <Navigation />
      <div className='sm:mx-20 mx-4'>
        
        <About />     
        <Project />      
        <Contact />
        
      </div>
      <Footer />
    </>
  )
}

export default App;
