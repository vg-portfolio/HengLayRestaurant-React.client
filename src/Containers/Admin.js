import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

import { Button } from 'react-materialize';

class Admin extends Component {

  componentDidMount(){
    // this.props.fetchCategories();
  }

  render() {
    return (
      <div style={styles.categoriesContainer}>
        <p>TEst</p>
      </div>
    );
  }

  renderCategories = () => {
    return this.props.categories.map(category => {
      return (<Button waves="orange" className="Button-theme" style={styles.categoryButton}>{category.category_type}</Button>)
    })
  }

}

const styles = {
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  categoryButton: {
    marginBottom: 5
  }
};

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories)
  }
}
export default connect(mapStateToProps, { fetchCategories })(Admin);
