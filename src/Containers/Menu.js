import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchAllDishes } from '../actions';

import { Button, Row, Col, Card } from 'react-materialize';

import DishList from '../Components/DishList';

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      category: "",
      dishes: "",
    }
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchAllDishes();
  }

  render() {
    const { dishes, categories } = this.props;
    return (
      <Row>
        <Col m={4} style={styles.flexContainer}>
          { this.renderCategories(categories) }
        </Col>
        <Col m={8} style={styles.scrollable}>
          <h5 className="center-align">{this.state.category.category_type}</h5>
          <DishList
            dishes={this.state.dishes}
            defaultDishes={dishes}
            currentCategory={this.state.category.category_type}/>
        </Col>
      </Row>
    );
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
    marginBottom: 5
  }
};

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories),
    dishes: Object.values(state.dishes)
  }
}
export default connect(mapStateToProps, { fetchCategories, fetchAllDishes })(Menu);
