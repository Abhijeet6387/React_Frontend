import React, { Component } from "react";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import AboutUs from "./AboutComponent";
import DishDetail from "./DishdetailComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }
const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  
  });


class Main extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
          const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          ></Home>
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}
      ></DishDetail>
      );
    };

    return (
        <div>
          <Header></Header>
          <div>
            <Switch>
                <Route path='/home' component={HomePage}></Route>
                <Route exact path='/aboutus' component={() => <AboutUs leaders={this.props.leaders}></AboutUs>}></Route>
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}></Menu>}></Route>
                <Route path='/menu/:dishId' component={DishWithId}></Route>
                <Route exact path='/contactus' component={Contact}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      );
    }
  }
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
