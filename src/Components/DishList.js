import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { Card, Text, Button, Row, Col } from 'react-materialize';

const DishList = ({dishes, currentCategory, defaultDishes, categories, adminView}) => (
  <div>
    {
      adminView
      ? renderAdminDishes(defaultDishes)
      : currentCategory
      ? renderDishes(dishes)
      : renderDishes(defaultDishes)
    }
  </div>
);

const renderAdminDishes = (dishes) => {
    return dishes.map(dish => {
      return (
        <div key={dish.id}>
          <Button >Edit</Button>
          <Card className=''
             textClassName=''
             title={dish.name}
          >
            <Row>
              <Col s={10}>{dish.description}</Col>
              <Col s={2}>
                {renderPrice(dish)}
              </Col>
            </Row>
          </Card>
        </div>
      )
    })
};

const renderDishes = (dishes) => {
    return dishes.map(dish => {
      return (
        <Card className=''
           textClassName=''
           title={dish.name}
        >
           <Row>
             <Col s={10}>{dish.description}</Col>
             <Col s={2}>
               {renderPrice(dish)}
             </Col>
           </Row>
        </Card>
      )
    })
};



const renderPrice = ({price, price2, price3, seasonal}) => {
  const prices = seasonal
                    ? "Seasonal"
                    : (
                      <div>
                        <p>
                          <CurrencyFormat
                            decimalScale={2}
                            fixedDecimalScale={true}
                            value={`${price}`}
                            displayType={'text'}
                            prefix={'S: $'} />
                        </p>
                        <p>
                          <CurrencyFormat
                            decimalScale={2}
                            fixedDecimalScale={true}
                            value={`${price2}`}
                            displayType={'text'}
                            prefix={'M: $'} />
                        </p>
                        <p>
                          <CurrencyFormat
                            decimalScale={2}
                            fixedDecimalScale={true}
                            value={`${price3}`}
                            displayType={'text'}
                            prefix={'L: $'} />
                        </p>
                      </div>
                    )

  return (
    <div className="right">
      { prices }
    </div>
  )
}

export default DishList;
