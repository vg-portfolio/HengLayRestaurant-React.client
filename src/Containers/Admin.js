import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchAllDishes, createDish, createCategory} from '../actions';

import { Button, Row, Col, Modal, Icon } from 'react-materialize';
import DishAndCategoryWrapper from '../Components/DishAndCategoryWrapper';
import ModalForm from '../Components/ModalForm';
import AddDish from './Forms/AddDish';
import AddCategory from './Forms/AddCategory';

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDishFormOpen: false,
      isCategoryFormOpen: false,
    }
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchAllDishes();
  }

  handleDishSubmit = (data) => {
    this.props.createDish(data);
    this.closeDishModal();
  }

  handleCategorySubmit = (data) => {
    this.props.createCategory(data);
    this.closeCategoryModal();
  }

  openDishModal = () => {
    this.setState({
      isDishFormOpen: true
    })
  }

  openCategoryModal = () => {
    this.setState({
      isCategoryFormOpen: true
    })
  }
  closeDishModal = () => {
    this.setState({
      isDishFormOpen: false,
    })
  }
  closeCategoryModal = () => {
    this.setState({
      isCategoryFormOpen: false,
    })
  }

  renderModalForm = () => {
    if (this.state.isDishFormOpen) {
      return (
        <ModalForm
            closeModal={this.closeDishModal}
            displayedContent={
              <AddDish onSubmit={this.handleDishSubmit} categories={this.props.categories}/>
            }
            modalTitle="Create New Dish" />
      )
    }
    if (this.state.isCategoryFormOpen ) {
      return (
        <ModalForm
            closeModal={this.closeCategoryModal}
            displayedContent={
              <AddCategory onSubmit={this.handleCategorySubmit} categories={this.props.categories}/>
            }
            modalTitle="Create a new Category" />
      )
    }
  }

  render() {
    const { dishes, categories } = this.props;
    return (
      <div>
        { this.renderModalForm() }
        <DishAndCategoryWrapper
          dishes={dishes}
          categories={categories}
          isAdmin={true}
          showDishForm={this.openDishModal}
          showCategoryForm={this.openCategoryModal}
          openDishModal={this.openDishModal}
          openCategoryModal={this.openCategoryModal} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories),
    dishes: Object.values(state.dishes)
  }
}

export default connect(mapStateToProps, { fetchCategories, fetchAllDishes, createDish, createCategory })(Admin);
