import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import { Button, Card, Row, Col, Input, Icon } from 'react-materialize';

class SignIn extends Component {

  componentDidMount(){
  }

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
    console.log("HANDLING SUBMIT SIGN IN FORM", data);
    this.props.signIn(data)
    .then(() => this.props.history.push("/admin"))
  }

  render() {
    return (
      <Row className="sign-in-container">
        <Col s={12} m={5} className="center offset-m3">
          <p className="flow-text">Heng Lay Sign In</p>
          <form onSubmit={this.props.handleSubmit(this.handleSignInSubmit)}>
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
