import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchAllDishes, createDish, createCategory} from '../actions';

import { Button, Row, Col, Modal, Icon } from 'react-materialize';
import DishList from '../Components/DishList';
import ModalForm from '../Components/ModalForm';
import AddDish from './Forms/AddDish';
import AddCategory from './Forms/AddCategory';

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDishFormOpen: false,
      isCategoryFormOpen: false,
      currentCategory: "",
      currentDishes: ""
    }
  }
  componentWillMount(){
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchAllDishes();
  }

  handleDishSubmit = (data) => {
    this.props.createDish(data);
    this.closeDishModal();
    console.log("HANDLING SUBMIT DISH FORM", data);
  }
  handleCategorySubmit = (data) => {
    this.props.createCategory(data);
    this.closeCategoryModal();
    console.log("HANDLING SUBMIT CATE FORM", data);
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

  renderCategories = (categories) => {
    return categories.map(category => {
      return (
        <Button
          onClick={() => { this.handleClick(category) }}
          waves="orange"
          className="orange darken-3"
          style={styles.categoryButton}>
            {category.category_type}
        </Button>
      )
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

  handleClick = (category) => {
    let dishes = this.props.dishes.filter(dish => dish.category_id === category.id );
    return this.setState({
      category: category,
      dishes: dishes });
  }

  render() {
    return (
      <Row>
        <Col m={4} style={styles.menuItemsContainer}>
          <Button
            style={styles.adminButton}
            onClick={() => this.setState({ isDishFormOpen: true })}>
              New Dish
          </Button>
          <Button
            style={styles.adminButton}
            onClick={() => this.setState({ isCategoryFormOpen: true })}>
              New Category
          </Button>
          { this.renderCategories(this.props.categories) }
          { this.renderModalForm() }
        </Col>
        <Col m={8} style={styles.scollable}>
          <DishList defaultDishes={this.props.dishes} adminView={true} />
        </Col>
      </Row>
    );
  }

}

const styles = {
  menuItemsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  modal: {
    width: "100%",
    minHeight: "100vh",
    top: 0
  },
  scrollable: {
    height: '100vh',
    overflowY: 'scroll'
  },
  categoryButton: {
    marginBottom: 5
  },
  adminButton: {
    marginBottom: 15
  }
};

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories),
    dishes: Object.values(state.dishes)
  }
}

export default connect(mapStateToProps, { fetchCategories, fetchAllDishes, createDish, createCategory })(Admin);
