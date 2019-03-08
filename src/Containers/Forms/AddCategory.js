import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import { createCategory } from '../../actions';

import { createNumberMask } from 'redux-form-input-masks';
import { Row, Button, Input, Icon, Col } from 'react-materialize';

class AddCategory extends Component {

  renderError = ({error, touched}) => {
    if (error && touched) {
      return (
        <span
          className="helper-text red-text"
        >
          {error}
        </span>
      );
    }
  }

  renderInput = ({label, type, input}) => {
    return (
      <Input s={12}
        {...input}
        type={type}
        label={label}
        validate
        className="henglay-input">
          <Icon>short_text</Icon>
      </Input>
    )
  }

  render() {
    return (
      <Row>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Col s={12}>
          <div className="container">
            <Field
              name="category_type"
              component={this.renderInput}
              label="Name of category"
              type="text"
              />
            <Field
              name="category_type_khmer"
              component={this.renderInput}
              label="Khmer name"
              type="text"
              />
            <Button className={this.props.invalid ? "disabled" : "modal-close"} style={{ width: '100%', marginTop: "5rem" }} type="submit">Submit</Button>
          </div>
        </Col>
        </form>
      </Row>
    );
  }
}

const validate = formValues => {
  const errors = {};
  //if error objects has property with the same name as
  //field above, then redux form will pass the error object to the renderInput function
  if (!formValues.category_type) {
    errors.category_type = "Enter the category name";
  }

  return errors;
};




export default reduxForm({
  form: 'addCategory',
  validate
})(AddCategory);
