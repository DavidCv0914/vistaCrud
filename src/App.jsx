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
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1689179893/sennova_vtutcg.png" alt="" style={{width:"20%"}} />
            <p>Un proyecto de centro de comercio y turismo regional Quindio</p>
          </Nav>
            <Button style={{backgroundColor:"#420608", border:"solid 2px #420608", height:"8vh", fontWeight:"600"}}>Iniciar sesión</Button>
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
          style={{height:"85vh",width:"70vw"}}
          className="d-block w-100"
          src="https://res.cloudinary.com/dtit8udfs/image/upload/v1689173297/cacao_gb9dgi.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"85vh"}}>
        <img
          style={{height:"85vh",width:"70vw"}}
          className="d-block w-100"
          src="https://res.cloudinary.com/dtit8udfs/image/upload/v1689176724/gente_ioew5f.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );

};

export default App;

// let active = 1;
//   let items = [];
//   for (let number = 1; number <= 5; number++) {
//     items.push(
//       <Pagination.Item key={number} active={number === active}>
//         {number}
//       </Pagination.Item>
//     );
//   }
  
//   return (
//     <>
//       <section
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <div style={{width:"80%",display: "grid",gridTemplateColumns: "repeat(2, 1fr)",gridTemplateRows: "repeat(2, 1fr)",gap: "30px", border:"solid 4px #5D1F06",backgroundColor:"#5D1F06", borderRadius:"10px", marginTop:"2%", paddingTop:"2%",paddingLeft:"7%",paddingBottom:"2%"}}>
//         <div style={{width:"80%"}}>
//         <Form.Control
//               name="search"
//               placeholder="Busqueda"
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//         </div>
//         <div style={{width:"80%"}}>
//         <Form.Control
//               name="search"
//               placeholder="Busqueda"
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//         </div>
//         <div style={{width:"80%"}}>
//         <Form.Control
//               name="search"
//               placeholder="Busqueda"
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//         </div>
//         <div style={{width:"80%"}}>
//         <Form.Control
//               name="search"
//               placeholder="Busqueda"
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//         </div>
//         </div>
//         <Button
//           variant="none"
//           style={{
//             backgroundColor: "#5D1F06",
//             color: "#FFFFFF",
//             marginTop: "3%",
//             height: "5%",
//             width: "10%",
//             fontSize: "100%",
//             display:"flex",
//             alignItems:"center",
//             justifyContent:"center"
//           }}
//         >
//           Registrar
//         </Button>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-evenly",
//             height: "150px",
//             alignItems: "center",
//             width: "80%",
//             marginTop:"2%"
//           }}
//         >
//           <InputGroup style={{ width: "30%" }}>
//             <Form.Control
//               name="search"
//               placeholder="Busqueda"
//               aria-label="Recipient's username"
//               aria-describedby="basic-addon2"
//             />
//             <Button
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 backgroundColor: "#5D1F06",
//               }}
//               variant="none"
//               id="button-addon2"
//               onClick={() => {
//                 setEventModal(!eventModal);
//                 setType("Persona");
//               }}
//             >
//               <box-icon name="search" color="rgb(255 255 255)"></box-icon>
//             </Button>
//           </InputGroup>
//           <Form.Select
//             style={{ width: "30%" }}
//             aria-label="Default select example"
//           >
//             <option>Organizar</option>
//             <option value="1">de 5-10</option>
//             <option value="2">de 10-15</option>
//             <option value="3">de 15-20</option>
//           </Form.Select>
//         </div>

//         <div style={{ width: "80%",marginTop:"2%" }}>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Nombre Empresa</th>
//                 <th>Nit Empresa</th>
//                 <th>Pagina Oficial</th>
//                 <th>opciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Colcacao</td>
//                 <td>54646</td>
//                 <td>Pagina Oficial</td>
//                 <th style={{ display: "flex", justifyContent: "space-around" }}>
//                   <Button
//                     style={{ display: "flex", alignItems: "center" }}
//                     variant="success"
//                   >
//                     <box-icon
//                       name="edit"
//                       color="rgba(255, 255, 255, 1)"
//                     ></box-icon>
//                   </Button>
//                   <Button variant="danger">Eliminar</Button>
//                 </th>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>CacaoProcol</td>
//                 <td>12312</td>
//                 <td>Pagina Oficial</td>
//                 <th style={{ display: "flex", justifyContent: "space-around" }}>
//                   <Button
//                     style={{ display: "flex", alignItems: "center" }}
//                     variant="success"
//                   >
//                     <box-icon
//                       name="edit"
//                       color="rgba(255, 255, 255, 1)"
//                     ></box-icon>
//                   </Button>
//                   <Button variant="danger">Eliminar</Button>
//                 </th>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Cacolocao</td>
//                 <td>12379</td>
//                 <td>Pagina Oficial</td>
//                 <th style={{ display: "flex", justifyContent: "space-around" }}>
//                   <Button
//                     style={{ display: "flex", alignItems: "center" }}
//                     variant="success"
//                   >
//                     <box-icon
//                       name="edit"
//                       color="rgba(255, 255, 255, 1)"
//                     ></box-icon>
//                   </Button>
//                   <Button variant="danger">Eliminar</Button>
//                 </th>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Cacolocao</td>
//                 <td>12379</td>
//                 <td>Pagina Oficial</td>
//                 <th style={{ display: "flex", justifyContent: "space-around" }}>
//                   <Button
//                     style={{ display: "flex", alignItems: "center" }}
//                     variant="success"
//                   >
//                     <box-icon
//                       name="edit"
//                       color="rgba(255, 255, 255, 1)"
//                     ></box-icon>
//                   </Button>
//                   <Button variant="danger">Eliminar</Button>
//                 </th>
//               </tr>
//             </tbody>
//           </Table>
//         </div>
//         <Pagination size="lg" style={{ marginTop: "5%" }}>
//           {items}
//         </Pagination>
//       </section>
//     </>
//   );
