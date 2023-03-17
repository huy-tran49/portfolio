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
        <Col sm={2}>
          <Navigation />
        </Col>
        <Col>
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
