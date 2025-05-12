import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {data} from "../../helpers/data"

const LegendsContainer = () => {
  return (
    <Container className='my-3 card-container'>
        <Row xs={1} md={2} xl={3}>
            {
                data.map((player)=>(
                    <p>{player.name}</p>
                ))
            }


            <Col>1 of 1</Col>



        </Row>
    </Container>
  )
}

export default LegendsContainer
