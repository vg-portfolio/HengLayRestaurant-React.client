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
      dishes: '',
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
        <Col m={3} className="hide-on-small-only" style={styles.flexContainer}>
          <Button
            onClick={() => { this.setState({ category: "" }) }}
            waves="orange"
            className="orange darken-3" style={styles.categoryButton} >
              Show All
          </Button>
          { this.renderCategories() }
        </Col>
        <Col s={12} m={9} style={styles.scrollable}>
          <div style={styles.flexContainer}>
            <DishList
              currentCategory={this.state.category}
              categories={categories}
              dishes={this.state.dishes}
              defaultDishes={dishes} />
          </div>
        </Col>
      </Row>
    );
  }

  renderCategories = () => {
    return this.props.categories.map(category => {
      return (
        <Button
          onClick={() => { this.handleClick(category) }}
          waves="orange"
          className="orange darken-3" style={styles.categoryButton} >
            {category.category_type}
        </Button>
      )
    })
  }

  handleClick = (category) => {
    let dishes = this.props.dishes.filter(dish => dish.category_id === category.id );
    console.log("DISHES", dishes);
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
