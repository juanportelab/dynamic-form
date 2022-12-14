import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import './ThirdStep.css';

export default function ThirdStep() {
  return (
    <div>
      <h2>Third step</h2>
      <h4>Do you want to add any comment?</h4>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg="10">
            <FloatingLabel 
              controlId="floatingTextarea" 
              label="Comments" 
              className="mb-3">
                <Form.Control 
                  as="textarea" 
                  placeholder="Leave a comment" 
                  onChange={(e) => console.log(e.target.value)}>
                </Form.Control>
            </FloatingLabel>
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={() => console.log("View result")}>
            View result 🤲🏻
          </p>
        </div>
      </Container>
    </div>
  )
}
