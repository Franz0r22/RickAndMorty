import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { getData }  from '../Axios/Axios.js'
import { filterData }  from '../Axios/Axios.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'

import './main.css'



const App = () => {
  
  const [characters, setCharacters] = useState(null)
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [name, setName] = useState('rick');
  const [status, setStatus] = useState('alive');
  const [species, setSpecies] = useState('human');

  const location = useLocation();


  useEffect(()=> {
    getData(setCharacters)
    filterData(setName, setStatus, setSpecies, setFilteredCharacters)
  }, [name, status, species, filteredCharacters])
  
  
    return (
    <main id="main">
      <Container className="py-5">
        <Row className="mb-5">
          <Col className="text-center">
            <img src="../src/assets/rym_logo.png" alt="rick and morty logo" width={350}/>
          </Col>
        </Row>
        <Row>
          <Col>

          </Col>
        </Row>
        <Row>
          {characters != null ? (characters.map(character => (
            <Col key={character.id} md={6} lg={4} xl={3}>
              <Card
              style={{ width: '18rem' }}
              bg="dark"
              text="light"
              border="warning"
              className="mb-5 mx-auto">
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <hr />
                  <div className="d-flex justify-content-between">
                    <div>
                      <FontAwesomeIcon size="xs" style={{color:'#b8c257'}} icon={faCircleDot} /> {character.species}
                    </div>
                    <div>
                      <FontAwesomeIcon style={{color:'#b8c257'}} icon={faHeartPulse} /> {character.status}
                    </div>
                  </div>
              </Card.Body>
            </Card>
          </Col>
          ))) : ('No hay personajes')}        
        </Row>
      </Container>
    </main>  
  )
}

export default App


