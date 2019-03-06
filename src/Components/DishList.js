import React from 'react';
import Currency from 'react-currency-formatter';
import { Card, Text } from 'react-materialize';

const DishList = ({dishes, currentCategory, defaultDishes, categories}) => (
  <div>
    { currentCategory ? renderDishes(dishes) : renderDishes(defaultDishes) }
  </div>
);

const renderDishes = (dishes) => {
    return dishes.map(dish => {
      return (
        <Card className=''
           textClassName=''
           title={dish.name}
           actions={renderPrice(dish)}
        >
           {dish.description}
        </Card>
      )
    })
};

const renderDefaultDishes = (dishes, categories) => {
  return categories.map(category => {
    return (
      <div>
      <p>{category.category_type}</p>
      { dishes.filter(dish => {
        return (
          <Card className=''
             textClassName='white-text'
             title={dish.name}
             actions={renderPrice(dish)}
          >
             {dish.description}
          </Card>
        )
      }) }
      </div>
    )
  })
};

const renderPrice = ({price, seasonal}) => {
  return (
    <div>
    <span className="left">Price</span>
    <h5 className="right-align">
      { seasonal
        ? "Seasonal"
        : <Currency
          quantity={price}
          currency="USD" /> }
    </h5>
    </div>

  )
}

export default DishList;
