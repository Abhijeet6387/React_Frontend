import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';  


  class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    // the state is changed
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    // displays the menu 
    render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
              // the even onClick is defined and the dish is passed on to the event handler
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

      // the menu is displayed and the DishDetail component is called.
      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">
                  <DishDetail selectedDish = {this.state.selectedDish} />
              </div>
          </div>
      );
  }
}
export default Menu;