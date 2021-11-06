import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';
import "./Services.css"


const Services = () => {
    const [servies, setSerives] = useState([])

    useEffect(() => {
        fetch('https://mysterious-anchorage-04163.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setSerives(data))
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5">TRAVEL Tour</h2>
            <hr className="my-3 text-primary border-6"/>
            <Row className="row p-5 gy-4 bg-muted">

                {servies.map((service) => {
                    const { name, description,price, img } = service;
                    return (
                        <>

                            <Col className=""  md={6} lg={4}
                                key={Services} >

                                <Card className="edit mx-auto" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body className="styling">
                                        <Card.Title className="fs-3 text-warning my-3">{name}</Card.Title>
                                        <Card.Title className="fs-5">{description}</Card.Title>
                                        <Card.Text>$
                                            {price}
                                        </Card.Text>
                                        <Button className="py-1 mb-2" variant="danger px-4">Books</Button>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </>
                    );
                })}

            </Row>
            <hr className="my-5 text-primary border-3"/>
        </div>

    );
};

export default Services;
