import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component {

   
    //Dish Detail
    renderDish(dish1){
        if(dish1!=null)
        return(
            <Card>
                <CardImg width="100%" src={dish1.image} alt={dish1.name} />
                <CardBody>
                    <CardTitle>{dish1.name}</CardTitle>
                    <CardText>{dish1.description}</CardText>
                </CardBody>

            </Card>
        );
        else
            return(
                <div></div>
            );
    }
    //Comment Display
    renderComments(dish1){
        const commentlist = dish1.comments.map((comment) =>{
            return(
                <div key={comment.id} className="container">
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

        if(dish1.comments != null){
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
       
        if(this.props.dish != null){
            console.log(this.props.dish )
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {/*dish detail*/}
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {/*Display Comments*/}
                            {this.renderComments(this.props.dish)}
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