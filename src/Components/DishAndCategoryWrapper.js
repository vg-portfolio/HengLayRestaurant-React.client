import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchAllDishes } from '../actions';

import { Button, Row, Col, Card } from 'react-materialize';

import DishList from './DishList';
import FAB from './FAB';
import CategoriesModalView from './CategoriesModalView';

class DishAndCategoryWrapper extends Component {

  constructor(props){
    super(props);
    this.state = {
      category: "",
      dishes: "",
      showMobileCategoryList: false
    }
  }

  render() {
    const { dishes, categories, isAdmin, showDishForm, showCategoryForm, openDishModal, openCategoryModal } = this.props;
    return (
      <Row>
        <Col m={4} style={styles.flexContainer} className="hide-on-small-only">
          { this.renderAdminButtons(isAdmin, showDishForm, showCategoryForm)}
          { this.renderCategories(categories) }
        </Col>
        <Col s={12} m={8} style={styles.scrollable}>
          <h5 className="center-align">{this.state.category.category_type}</h5>
          <DishList
            dishes={this.state.dishes}
            defaultDishes={dishes}
            currentCategory={this.state.category.category_type}/>
        </Col>
        { this.renderCategoryModalList(categories) }

        { isAdmin
          ? <FAB
              isAdmin={isAdmin}
              openCategoryModal={openCategoryModal}
              openDishModal={openDishModal}
              onClick={() => this.setState({     showMobileCategoryList: true })}/>
          : <FAB
              onClick={() => this.setState({ showMobileCategoryList: true })}/>
          }
      </Row>
    );
  }

  closeModal = () => {
    this.setState({ showMobileCategoryList: false });
  }

  renderCategoryModalList = (categories) => {
    if (this.state.showMobileCategoryList) {
      console.log("STATE", this.state.showMobileCategoryList)
      return <CategoriesModalView modalContent={this.renderCategories(categories)}
      closeModal={this.closeModal}/>
    }
  }

  renderAdminButtons = (isAdmin, showDishForm, showCategoryForm) => {
    if (isAdmin) {
      return (
        <div>
          <Button
            style={styles.adminButton}
            onClick={() => showDishForm() }>
              New Dish
          </Button>
          <Button
            style={styles.adminButton}
            onClick={() => showCategoryForm() }>
              New Category
          </Button>
        </div>
      )
    }
  }

  renderCategories = (categories) => {
    return categories.map(category => {
      return (
        <Button
          onClick={() => {
            this.handleClick(category);
            this.setState({ showMobileCategoryList: false })
          }}
          waves="orange"
          className="btn orange waves-effect waves-orange darken-3 hoverable modal-close"
          style={styles.categoryButton}>
            {category.category_type}
        </Button>
      )
    })
  }

  handleClick = (category) => {
    let dishes = this.props.dishes.filter(dish => dish.category_id === category.id );
    return this.setState({
      category: category,
      dishes: dishes });
  }

}

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  stickyContainer: {
    position: 'fixed'
  },
  scrollable: {
    height: '100vh',
    overflowY: 'scroll'
  },
  categoryButton: {
    marginBottom: 7
  },
  adminButton: {
    width: '100%',
    marginBottom: 15
  }
};

export default DishAndCategoryWrapper;
