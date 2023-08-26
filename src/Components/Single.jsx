import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { singleData }  from '../Axios/Axios.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import { faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { faLocust } from '@fortawesome/free-solid-svg-icons'

import './main.css'


const Single = () => {
    
  const [character, setCharacter] = useState(null)  
  const {id} = useParams()

  useEffect(() => {
    singleData(id, setCharacter)
  }, [])
  

    return (
    <main id="single">
      {character != null ? (
        <Container className="py-5">
          <Row>
            <Col className='text-center text-white'>
              <p>Origen: {character.origin.name}</p>
              <p>Ubicación: {character.location.name}</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card
              style={{ width: '18rem' }}
              bg="dark"
              text="light"
              border="warning"
              className="mb-5 mx-auto">
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                  <Badge className={`bg-${character.status === 'Alive' ? 'warning' : 'danger'} text-${character.status === 'Alive' ? 'dark' : 'white'}`} style={{bottom:125, position: 'absolute'}}>
                  <FontAwesomeIcon style={{ color:'#000' }} icon={faHeartPulse} /> {character.status}
                  </Badge>
                  <Card.Title>{character.name}</Card.Title>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div>
                    {character.species === 'Human' ? (
                    <FontAwesomeIcon icon={faPerson} size="lg" style={{ color: '#b8c257' }} />
                    ) : ( <FontAwesomeIcon icon={faLocust} style={{ color: '#b8c257' }} />
                    )} {character.species}
                    </div>
                    <div>
                    <FontAwesomeIcon style={{color:'#b8c257'}} icon={faVenusMars} /> {character.gender}
                    </div>
                  </div>
              </Card.Body>
            </Card>
            <div className='d-flex justify-content-center'>
              <a href="/"><Button variant="warning">Volver</Button></a>
            </div>
            </Col>
          </Row>
        </Container>          
      ) : (
      <Container>
        <Row>
          <Col className='mt-5 text-center'>
            <h1 className="text-white mb-5">No existe un personaje con este ID</h1>
            <a href="/"><Button variant="warning">Ir al inicio</Button></a>
          </Col>
        </Row>
      </Container>
        
      ) }
    </main>
  )
}

export default Single
