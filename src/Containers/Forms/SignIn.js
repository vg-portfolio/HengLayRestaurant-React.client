import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import { Button, Card, Row, Col, Input, Icon } from 'react-materialize';

class SignIn extends Component {

  renderInput = ({label, type, input}) => {
    return (
      <Input
        s={12}
        {...input}
        type={type}
        label={label}
        validate
        className="center">
          <Icon>short_text</Icon>
      </Input>
    )
  }
  renderPWInput = ({label, type, input}) => {
    return (
      <Input
        s={12}
        {...input}
        type={type}
        label={label}
        validate
        className="center">
          <Icon>lock</Icon>
      </Input>
    )
  }

  handleSignInSubmit = (data) => {
    this.props.signIn(data)
    .then(() => this.props.history.push("/admin"))
    .then(() => window.Materialize.toast('Welcome back!', 3000, 'teal'))
    .catch(() => window.Materialize.toast('Wrong email or password', 3000, 'red'))
  }

  render() {
    return (
      <Row className="sign-in-container">
        <Col s={12} m={6} className="center offset-m3">
          <h4 style={{marginTop: '5rem'}} className="white-text">Heng Lay Restaurant</h4>
          <form onSubmit={this.props.handleSubmit(this.handleSignInSubmit)}>
            <Card title="Sign In">
              <Field
                name="email"
                component={this.renderInput}
                label="Email"
                type="text"
                />
              <Field
                name="password"
                component={this.renderPWInput}
                label="Password"
                type="password"
                />
              <Button className={ this.props.invalid ? "disabled" : ""}
                type="submit"
                style={{ width: '100%' }}>
                  Sign In
              </Button>
            </Card>
          </form>
        </Col>
      </Row>
    );
  }
}

const styles = {};

const validate = formValues => {
  const errors = {};
  //if error objects has property with the same name as
  //field above, then redux form will pass the error object to the renderInput function
  if (!formValues.email) {
    errors.email = "Enter your email";
  }
  if (!formValues.password) {
    errors.password = "Enter a password";
  }

  return errors;
};

const wrappedForm = reduxForm({
  form: 'signIn',
  validate
})(SignIn)

export default connect(null, { signIn })(wrappedForm)
