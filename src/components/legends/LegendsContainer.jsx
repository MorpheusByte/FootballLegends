import React from "react";
import { Col, Container, Row ,Card, Button} from "react-bootstrap";
import { data } from "../../helpers/data";

const LegendsContainer = () => {
    


  return (
    <Container className="my-3 card-container">
      <Row xs={1} md={2} xl={3} className="justify-content-center g-3">
        {data.map((player) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={player.img}/>
              <Card.Header>
                <Card.Title>
                    {player.name}
                </Card.Title>
              </Card.Header>
              <ul>
              {
                player.statistics.map((item)=>(
                    <li className="list-unstyled text-start p-1 fw-bold display-6">⚽️ {item}</li>
                ))
              }
                
              </ul>
              <p>Carear Years {player.official_career}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LegendsContainer;
