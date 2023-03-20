import './App.css';
import Navigation from './components/navbar';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import { Col, Row } from 'react-bootstrap';


function App () {
  return (
    <>
      <Row>
        <Col sm={1}>
          <Navigation />
        </Col>
        <Col className='border-l-2 h-max ml-8 pl-20'>
          <About />
          <br />
          <Project/>
          <br />
          <Contact/>
        </Col>
      </Row>

    </>
  )
}

export default App;
