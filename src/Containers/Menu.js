import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchAllDishes } from '../actions';

import { Button, Row, Col, Card } from 'react-materialize';

import DishAndCategoryWrapper from '../Components/DishAndCategoryWrapper';

class Menu extends Component {

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchAllDishes();
  }

  render() {
    const { dishes, categories } = this.props;
    return (
      <DishAndCategoryWrapper dishes={dishes} categories={categories} isAdmin={false}/>
    );
  }

}

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories),
    dishes: Object.values(state.dishes)
  }
}
export default connect(mapStateToProps, { fetchCategories, fetchAllDishes })(Menu);
