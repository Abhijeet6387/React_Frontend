import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'; 
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      
    };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    
  }
    render() {
      
      const HomePage = () => {
        return(
            <Home></Home>
        );
      }
      return (
        <div>
          <Header></Header>
          <Switch>
              <Route path='/home' component={HomePage}></Route>
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}></Menu>} ></Route>
              <Redirect to="/home"></Redirect>
          </Switch>
          <Footer></Footer>
        </div>
      );
    }
 }



export default Main;