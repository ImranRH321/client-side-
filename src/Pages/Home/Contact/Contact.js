import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="bg-info bg-dark">
      <ContactForm />
    </div>
  );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
  return (
    <div style={{ padding: "58px 0 40px" }}>
      <div right>
        <h2 className="text-center text-warning fs-1">Contact Us</h2>
      </div>
        <p className="text-center text-muted mb-4">
          You can easily reach us through filling up the form
        </p>
      <div>
        <Container>
           <Row>
             <Col md={6}>
            <div>
            <img  className="img-fluid rounded"  src="https://cdn.dribbble.com/users/1815853/screenshots/9841145/media/99609d6550e58534f9f14810172f8601.gif" alt="" />
            </div>
             </Col>

             <Col md={6}>
             <Form>
              <Row>
                <Col >
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicText"
                  >
                    <Form.Label>Your Name </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </Form.Group>
                </Col>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-white"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Control
                style={formStyle}
                className="my-3"
                type="text"
                placeholder="Write Your Subject..."
              />
              <Form.Group
                className="mb-3 text-white"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Messages</Form.Label>
                <Form.Control
                  style={formStyle}
                  placeholder="Write you message..."
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button className="mb-5 px-4 text-dark" variant="light" type="submit">
                <a href="/login">Submit</a>
              </Button>
            </Form>
             </Col>
           </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
