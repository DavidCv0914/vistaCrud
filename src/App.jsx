import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "boxicons";
import Pagination from "react-bootstrap/Pagination";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const App = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  
  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{width:"80%",display: "grid",gridTemplateColumns: "repeat(2, 1fr)",gridTemplateRows: "repeat(2, 1fr)",gap: "30px", border:"solid 4px #5D1F06",backgroundColor:"#5D1F06", borderRadius:"10px", marginTop:"2%", paddingTop:"2%",paddingLeft:"7%",paddingBottom:"2%"}}>
        <div style={{width:"500px"}}>
        <Form.Control
              name="search"
              placeholder="Busqueda"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
        </div>
        <div style={{width:"500px"}}>
        <Form.Control
              name="search"
              placeholder="Busqueda"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
        </div>
        <div style={{width:"500px"}}>
        <Form.Control
              name="search"
              placeholder="Busqueda"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
        </div>
        <div style={{width:"500px"}}>
        <Form.Control
              name="search"
              placeholder="Busqueda"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
        </div>
        </div>
        <Button
          variant="none"
          style={{
            backgroundColor: "#5D1F06",
            color: "#FFFFFF",
            marginTop: "3%",
            height: "5%",
            width: "10%",
            fontSize: "120%",
          }}
        >
          Registrar
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            height: "150px",
            alignItems: "center",
            width: "80%",
          }}
        >
          <InputGroup style={{ width: "30%" }}>
            <Form.Control
              name="search"
              placeholder="Busqueda"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#5D1F06",
              }}
              variant="none"
              id="button-addon2"
              onClick={() => {
                setEventModal(!eventModal);
                setType("Persona");
              }}
            >
              <box-icon name="search" color="rgb(255 255 255)"></box-icon>
            </Button>
          </InputGroup>
          <Form.Select
            style={{ width: "30%" }}
            aria-label="Default select example"
          >
            <option>Organizar</option>
            <option value="1">de 5-10</option>
            <option value="2">de 10-15</option>
            <option value="3">de 15-20</option>
          </Form.Select>
        </div>

        <div style={{ width: "80%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre Empresa</th>
                <th>Nit Empresa</th>
                <th>Pagina Oficial</th>
                <th>opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Colcacao</td>
                <td>54646</td>
                <td>Pagina Oficial</td>
                <th style={{ display: "flex", justifyContent: "space-around" }}>
                  <Button
                    style={{ display: "flex", alignItems: "center" }}
                    variant="success"
                  >
                    <box-icon
                      name="edit"
                      color="rgba(255, 255, 255, 1)"
                    ></box-icon>
                  </Button>
                  <Button variant="danger">Eliminar</Button>
                </th>
              </tr>
              <tr>
                <td>2</td>
                <td>CacaoProcol</td>
                <td>12312</td>
                <td>Pagina Oficial</td>
                <th style={{ display: "flex", justifyContent: "space-around" }}>
                  <Button
                    style={{ display: "flex", alignItems: "center" }}
                    variant="success"
                  >
                    <box-icon
                      name="edit"
                      color="rgba(255, 255, 255, 1)"
                    ></box-icon>
                  </Button>
                  <Button variant="danger">Eliminar</Button>
                </th>
              </tr>
              <tr>
                <td>3</td>
                <td>Cacolocao</td>
                <td>12379</td>
                <td>Pagina Oficial</td>
                <th style={{ display: "flex", justifyContent: "space-around" }}>
                  <Button
                    style={{ display: "flex", alignItems: "center" }}
                    variant="success"
                  >
                    <box-icon
                      name="edit"
                      color="rgba(255, 255, 255, 1)"
                    ></box-icon>
                  </Button>
                  <Button variant="danger">Eliminar</Button>
                </th>
              </tr>
              <tr>
                <td>4</td>
                <td>Cacolocao</td>
                <td>12379</td>
                <td>Pagina Oficial</td>
                <th style={{ display: "flex", justifyContent: "space-around" }}>
                  <Button
                    style={{ display: "flex", alignItems: "center" }}
                    variant="success"
                  >
                    <box-icon
                      name="edit"
                      color="rgba(255, 255, 255, 1)"
                    ></box-icon>
                  </Button>
                  <Button variant="danger">Eliminar</Button>
                </th>
              </tr>
            </tbody>
          </Table>
        </div>
        <Pagination size="lg" style={{ marginTop: "5%" }}>
          {items}
        </Pagination>
      </section>
    </>
  );
};

export default App;
