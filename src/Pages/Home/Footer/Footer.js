import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Footer.css'

import { NavLink } from "react-router-dom";

const Footer = () => {

  return (
    <div>
         <Container fluid className="footer">
        <Row>
          <Col md={5}>
            <div className="text-center ">
              <img className="w-50 rounded fixed" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/df124277204955.5c80b796cd7a0.gif" alt="" />
              </div>
          </Col>
          <Col md={2}>
            <ul className="list-unstyled">
            <h4> Explore</h4>
              <li>
                <a href="/home">home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/our">Our</a>
              </li>
              <li>
                <a href="services"> Service</a>
              </li>
              <li>
                 <a href="">FAQ</a>
              </li>
            </ul>
          </Col>

          <Col md={2}>
            <ul className="list-unstyled">
            <h4>Our Address</h4>
             
              <li>
                <a href="">3596 Longview Ave, NY</a>
              </li>
              <li>
                <a href=""> 718-570-8650</a>
              </li>
              <li>
                <a href="">  anymail@mail.com</a>
              </li>

              <li>
                  <a href="">09.00 - 17.00</a>
              </li>

            </ul>
          </Col>
          <Col md={3}>
            <h4>Subscribe</h4>
            <p>Stay in the know with news and promotions</p> 
             
             <input  type="text" className="form-control w-50 mx-auto" placeholder="text......" />
             <a href="/login"> <Button className="btn bg-primary my-4 px-5">Sign Up</Button></a>
          </Col> 
           <p className="mt-3">Copyright &copy; All Reserved by
        in 2021</p>
        <hr style={{width: "110px", margin: "auto"}} />
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
