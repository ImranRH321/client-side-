import React from 'react';
import { Col, Row, Button, Card, Container } from 'react-bootstrap';
import './Ourservic.css'


const Ourservice = () => {

    return (
        <div style={{backgroundColor:"blue"}} className=" p-4 bg- text-warning  border-3">
            <Container >
                <Row>
                    <Col md={6} >
                    <div className="m-4 text-left mt-5">
                    <h3>WELCOME TO, TOUR WORLD</h3>
                     <h4>Nature's Majesty Awaits You</h4>
                     <p className="mt-5">“Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one’s lifetime.” – Mark Twain</p>
                    </div>
                    </Col>
                    <Col md={6}>
                      <div>
                          <img className="img-fluid" src="https://i.ibb.co/30c7ThC/lake-nature-beautiful-places-world-wallpaper-preview.jpg" alt="" />
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Ourservice;
