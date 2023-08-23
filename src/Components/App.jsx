import React from 'react'
import { useState, useEffect } from 'react'
import  getData  from '../Axios/Axios.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './main.css'



const App = () => {
  
  const [characters, setCharacters] = useState(null)
  const [images, setImages] = useState(null)  

  useEffect(()=> {
    getData(setCharacters)
  }, [])
  
  
    return (
    <Container className="py-5">
      <Row className="mb-3">
        <Col className="text-center">
          <h1 className="text-uppercase text-white">Rick and Morty</h1>
        </Col>
      </Row>
      <Row>
        {characters != null ? (characters.map(character => (
          <Col key={character.id} lg="3">
            <Card
            style={{ width: '18rem' }}
            bg="dark"
            text="light"
            border="warning"
            className="mb-5">
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <hr />
              <Card.Text>
                {character.species} | {character.status}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))) : ('No hay personajes')}        
      </Row>
    </Container>
  )
}

export default App


