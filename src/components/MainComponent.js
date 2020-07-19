import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import AboutUs from "./AboutComponent";
import DishDetail from "./DishdetailComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={
                        this.state.promotions.filter(
                            (promo) => promo.featured
                        )[0]
                    }
                    leader={
                        this.state.leaders.filter(
                            (leader) => leader.featured
                        )[0]
                    }
                ></Home>
            );
        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={
                        this.state.dishes.filter(
                            (dish) =>
                                dish.id === parseInt(match.params.dishId, 10)
                        )[0]
                    }
                    comments={this.state.comments.filter(
                        (comment) =>
                            comment.dishId === parseInt(match.params.dishId, 10)
                    )}
                ></DishDetail>
            );
        };

        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route path="/home" component={HomePage}></Route>
                    <Route
                        exact
                        path="/menu"
                        component={() => (
                            <Menu dishes={this.state.dishes}></Menu>
                        )}
                    ></Route>
                    <Route path="/menu/:dishId" component={DishWithId}></Route>
                    <Route
                        path="/aboutus"
                        component={() => (
                            <AboutUs leaders={this.state.leaders} />
                        )}
                    ></Route>
                    <Route exact path="/contactus" component={Contact}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;