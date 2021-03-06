import React, { Component } from 'react';
import { Field, Form, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';

import { createNumberMask } from 'redux-form-input-masks';
import { Row, Button, Input, Icon, Col } from 'react-materialize';

import FileUploader from "react-firebase-file-uploader";
import firebase from '../../Firebase';

class AddDish extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      url: "",
      uploading: false,
      progress: 0
    }
  }

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

  renderTextArea = ({label, input, meta}) => {
    return (
        <Input type='textarea'
          {...input}
          label={label}
          s={12}>
            <Icon>format_align_center</Icon>
        </Input>
    )
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

  renderInputPrice = ({label, type, input, currencyMask}) => {
    return (
      <Input s={12}
        {...input}
        type={type}
        label={label}
        className="henglay-input"
        { ...currencyMask } >
          <Icon>attach_money</Icon>
      </Input>
    )
  }

  renderCheckbox = ({name, label, input}) => {
    return <Input
            {...input}
            name={name}
            type='checkbox'
            label={label}
            className="henglay-checkbox"/>
  }

  renderSelect = ({name, label, input}) => {
    const options = this.props.categories.map(category => {
      return (
        <option key={category.id} value={category.id}>
          {category.category_type}
        </option>
      )
    })
    return (
      <Input s={12}
        type='select'
        icon="add_box"
        label={label}
        className="henglay-input"
        {...input} >
          <option defaultValue="" disabled selected>
            Categories
          </option>
        { options }
      </Input>
    )
  }

  renderUpload = ({ name, label, input, type}) => {
    return (
      <FileUploader
        accept="image/*"
        storageRef={firebase.storage().ref("menu_pics")}
        onUploadStart={this.handleUploadStart}
        onUploadSuccess={this.handleUploadSuccess}
      />
    )
    // return <Input {...input} onChange={this.handleChange} value={this.state.image} type={type} label={label} s={12}/>
  }
  handleUploadStart = () => {
    this.setState({uploading: true});
  }
  handleUploadSuccess = fileName => {
    console.log(fileName);
    firebase.storage().ref("menu_pics").child(fileName).getDownloadURL()
      .then(url => {
        this.setState({ url, uploading: false, progress: 100 });
      })
      .then(() => {
        this.props.dispatch(change('addDish', 'image_url', this.state.url))
      });
      // .then(() => {
      //   const db = firebase.firestore();
      //   db.collection('images').doc("2").set({dish_id: 2, url: this.state.url })
      // });
  }
  handleProgress = progress => this.setState({ progress });

  render() {
    return (
      <Row>
        <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Col s={12} m={8}>
          <Field
            name="name"
            placeholder="Title of Dish"
            component={this.renderInput}
            label="Title of Dish"
            type="text"
            />
          <Field
            name="description"
            label="Description"
            component={this.renderTextArea}
            type="text"
            />
          <Field
            name="image"
            label="image"
            component={this.renderUpload}
            type="file"
            />
          <Row style={{marginLeft: '2rem'}}>
            {this.state.url && <img style={{height: '50px'}} src={this.state.url}/>}
            {
              this.state.uploading &&
              <div class="progress">
                <div class="indeterminate"></div>
              </div>
            }
          </Row>
        </Col>
        <Col s={12} m={4}>
          <Field
            name="category_id"
            placeholder="Category"
            component={this.renderSelect}
            label="Category"
            type="select"
            />
          <Field
            name="price"
            label="Price for small"
            component={this.renderInputPrice}
            type="tel"
            { ...currencyMask }
            />
          <Field
            name="price2"
            label="Price for medium"
            component={this.renderInputPrice}
            type="tel"
            { ...currencyMask }
            />
          <Field
            name="price3"
            label="Price for large"
            component={this.renderInputPrice}
            type="tel"
            { ...currencyMask }
            />
          <Field
            name="seasonal"
            component={this.renderCheckbox}
            label="Seasonal"
            type="checkbox"
            />
        </Col>
        <Button className={this.props.invalid ? "disabled" : "modal-close"} style={{ width: '100%', marginTop: '1.5rem' }} type="submit">Submit</Button>
        </form>
      </Row>
    );
  }
}

const validate = formValues => {
  const errors = {};
  //if error objects has property with the same name as
  //field above, then redux form will pass the error object to the renderInput function
  if (!formValues.title) {
    errors.title = "Enter a name for this dish";
  }
  if (!formValues.description) {
    errors.description = "Write a description";
  }
  if (!formValues.category_id) {
    errors.category_id = "Pick a category";
  }
  if (!formValues.price && !formValues.price2 && !formValues.price3 ) {
    errors.price = "Add a price";
  }

  return errors;
};

const currencyMask = createNumberMask({
  prefix: '$ ',
  decimalPlaces: 2,
  locale: 'en-US',
  allowEmpty: true,
  stringValue: true
})

export default reduxForm({
  form: 'addDish',
  validate
})(AddDish);
