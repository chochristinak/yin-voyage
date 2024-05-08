// LoginForm.jsx
import "./LoginForm.css";
import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>LOGIN</h2>
          <div className="form-container">
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                LOG IN
              </Button>
            </Form>
          </div>
          <p className="error-message">{error}</p>
        </Col>
      </Row>
    </Container>
  );
}
