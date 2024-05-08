import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './SignUpForm.css'


export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
          <h2>SIGNUP</h2> 
            <div className="form-container">
              <Form autoComplete="off" onSubmit={this.handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="confirm">
                  <Form.Label>Confirm</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Button type="submit" disabled={disable}>SIGN UP</Button>
              </Form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}