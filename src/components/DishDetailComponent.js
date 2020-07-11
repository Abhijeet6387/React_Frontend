import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }
    //Dish Detail
    renderDish(dish){
        if(dish!=null)
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>

            </Card>
        );
        else
            return(
                <div></div>
            );
    }
    //Comment Display
    renderComments(dish){
        const commentlist = dish.comments.map((comment) =>{
            return(
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </div>
                
                
            );
        });

        if(dish.comments != null){
            return(
                <div>
                    <h4>Comments</h4>
                    <div>{commentlist}</div>
                </div>
            );
        }
        else
            return(<div></div>);
    }
    render(){
        if(this.props.selectedDish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {/*dish detail*/}
                            {this.renderDish(this.props.selectedDish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {/*Display Comments*/}
                            {this.renderComments(this.props.selectedDish)}
                        </div>
                    </div>
                </div>
            );
        }
        else
            return(<div></div>);
    }
}
export default DishDetail;