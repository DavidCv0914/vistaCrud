import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "boxicons";
import Pagination from "react-bootstrap/Pagination";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import vide from "./assets/VID-20230712-WA0004.mp4";

const App = () => {
  
  return (
    <>
    <Navbar style={{backgroundColor:"#F6F6F6"}} expand="lg">
      <Container fluid >
        <Navbar.Brand href="#" style={{width:"10%"}}><img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1689170594/LOGO_ESCUELA_DEL_CACAO_dxyfn2.jpg" style={{width:"100%"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"#420608", fontWeight:"700"}}>Inicio</Nav.Link>
            <Nav.Link href="#action2" style={{color:"#420608", fontWeight:"700"}}>Sobre nosotros</Nav.Link>
            
          </Nav>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"60%",gap:"5px", marginRight:"14%"}}>
              <div style={{width:"14.5vw",display:"flex", justifyContent:"center"}}>
              <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1689179893/sennova_vtutcg.png" alt="" style={{width:"60%"}} />
              </div>
              <p style={{overflowWrap:"break-word", width:"20vw", textAlign:"center",fontSize:"110%",fontWeight:"600"}}>Un proyecto de centro de comercio y turismo regional Quindio</p>
            </div>
            <Button style={{backgroundColor:"#420608", border:"solid 2px #420608", fontWeight:"600",padding:"10px 24px", fontSize:"120%"}}>Iniciar sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel style={{height:"85vh",backgroundColor:"#5D1F06",}}>
      <Carousel.Item interval={125000} style={{height:"85vh"}}>
        <video  height="100%" width="100%" controls autoPlay muted>
          <source src={vide} />
        </video>
      </Carousel.Item>
      <Carousel.Item style={{height:"85vh"}}>
        <img
          style={{height:"85vh",width:"70vw",marginLeft:"15vw"}}
          className="d-block"
          src="https://res.cloudinary.com/dtit8udfs/image/upload/v1689173297/cacao_gb9dgi.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"85vh"}}>
        <img
          style={{height:"85vh",width:"70vw",marginLeft:"15vw"}}
          className="d-block"
          src="https://res.cloudinary.com/dtit8udfs/image/upload/v1689176724/gente_ioew5f.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </>
  );

};

export default App;

