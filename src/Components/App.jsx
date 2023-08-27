import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../Axios/Axios.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "react-bootstrap/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faLocust } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import "./main.css";

const App = () => {
  //Estados
  const [characters, setCharacters] = useState(null);
  //const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [page, setPage] = useState(null);
  const [pageCount, setPageCount] = useState("");
  const [isActive, setIsActive] = useState(null);
  const [isActiveStatus, setIsActiveStatus] = useState(null);

  //Especies
  const especies = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ];

  //Status
  const estados = ["Alive", "Dead", "Unknown"];

  //Paginacion
  const paginationItems = () => {
    let items = [];
    for (let number = 1; number <= pageCount; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  //Manejadores
  const handleFilterStatus = (newStatus, index) => {
    setStatus(newStatus);
    setIsActiveStatus(index !== isActiveStatus ? index : isActiveStatus);
    setPage(1);
  };
  const handleFilterSpecies = (newSpecies, index) => {
    setSpecies(newSpecies);
    setIsActive(index !== isActive ? index : isActive);
    setPage(1);
  };
  const handlePageClick = (number) => {
    setPage(number);
  };
  const handleResetClick = (newState, setState, unactive, setStateFilter) => {
    setState(newState);
    setStateFilter(unactive);
  };

  //Axios
  useEffect(() => {
    getData(name, status, species, setCharacters, page, setPageCount);
  }, [name, status, species, page]);

  return (
    <main id="main">
      <Container className="py-5">
        <Row className="mb-5">
          <Col className="text-center">
            <img
              src="../src/assets/rym_logo.png"
              alt="rick and morty logo"
              width={350}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <FontAwesomeIcon className="me-3" icon={faFilter} />
                Filter by Species
              </Accordion.Header>
              <Accordion.Body>
                {especies.map((especie, index) => (
                  <Button
                    className="me-2 mb-1 mb-lg-0"
                    variant={index === isActive ? "success" : "warning"}
                    key={index}
                    onClick={() => handleFilterSpecies(especie, index)}
                  >
                    {especie}
                  </Button>
                ))}
                <Button
                  variant="danger"
                  onClick={() =>
                    handleResetClick("", setSpecies, null, setIsActive)
                  }
                >
                  Reset
                </Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <FontAwesomeIcon className="me-3" icon={faFilter} />
                Filter by Status
              </Accordion.Header>
              <Accordion.Body>
                {estados.map((estado, index) => (
                  <Button
                    className="me-2"
                    variant={index === isActiveStatus ? "success" : "warning"}
                    key={index}
                    onClick={() => handleFilterStatus(estado, index)}
                  >
                    {estado}
                  </Button>
                ))}
                <Button
                  variant="danger"
                  onClick={() => handleResetClick("", setStatus, null, setIsActiveStatus)}
                >
                  Reset
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
        <Row>
          {characters != null
            ? characters.map((character) => (
                <Col key={character.id} md={6} lg={4} xl={3}>
                  <Card
                    style={{ width: "18rem" }}
                    bg="dark"
                    text="light"
                    border="warning"
                    className="mb-5 mx-auto"
                  >
                    <a href={`/character/${character.id}`}>
                      <Card.Img variant="top" src={character.image} />
                    </a>
                    <Card.Body>
                      <Badge
                        className={`bg-${
                          character.status === "Alive" ? "warning" : "danger"
                        } text-${
                          character.status === "Alive" ? "dark" : "white"
                        }`}
                        style={{ bottom: 125, position: "absolute" }}
                      >
                        <FontAwesomeIcon
                          style={{ color: "#000" }}
                          icon={faHeartPulse}
                        />{" "}
                        {character.status}
                      </Badge>
                      <Card.Title>{character.name}</Card.Title>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div>
                          {character.species === "Human" ? (
                            <FontAwesomeIcon
                              icon={faPerson}
                              size="lg"
                              style={{ color: "#b8c257" }}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faLocust}
                              style={{ color: "#b8c257" }}
                            />
                          )}{" "}
                          {character.species}
                        </div>
                        <div>
                          <FontAwesomeIcon
                            style={{ color: "#b8c257" }}
                            icon={faVenusMars}
                          />{" "}
                          {character.gender}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : "Sin personajes"}
        </Row>
        <Row>
          <section className="d-flex justify-content-center">
            <Pagination className="flex-wrap" size="sm">
              {paginationItems()}
            </Pagination>
          </section>
        </Row>
      </Container>
    </main>
  );
};

export default App;
