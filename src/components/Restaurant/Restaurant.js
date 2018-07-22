import React, { Component } from 'react';
import EditForm from '../User/EditForm';
import ButtonComponent from '../Presentational/ButtonComponent';
import { Link } from 'react-router-dom';
import LoaderAnimation from '../Presentational/Loaders';


const Form = (props) => {
    if (props.showForm) {
        return (
            <EditForm
                showHideForm={props.showHideForm}
                editRestaurant={props.editRestaurant}
                restaurantTitle={props.restaurantTitle}
                restaurantDescription={props.restaurantDescription}
                restaurantDrinks={props.restaurantDrinks}
                restaurantId={props.restaurantId}
            />
        )
    } else {
        return null;
    }
}

class Restaurant extends Component {
    constructor(props) {
        super(props);
        const restaurantId = this.props.match.params.id;
        props.fetchRestaurantById(restaurantId);
        this.state = {
            showForm: false,
        }
    }
    showHideForm = () => {
        this.setState((prevState, props) => {
            return {
                showForm: !prevState.showForm
            }
        })
    }

    render() {
        console.log(this.props);
        const restaurantId = this.props.match.params.id;
        if (this.props.restaurantPending) {
            return (
                <div>
                    <LoaderAnimation />
                </div>
            )
        } else if (this.state.showForm === true) {
            return (
                <Form
                    editRestaurant={this.props.editRestaurant}
                    restaurantId={restaurantId}
                    restaurantTitle={this.props.restaurantById.title}
                    restaurantDescription={this.props.restaurantById.description}
                    restaurantDrinks={this.props.restaurantById.drinks}
                    showForm={this.state.showForm}
                    showHideForm={this.showHideForm}
                />
            )
        } else if (this.props.restaurantById && this.state.showForm === false) {
            return (
                <div>
                    <h1>{this.props.restaurantById.title}</h1>
                    <p>{this.props.restaurantById.description}</p>
                    <p>{this.props.restaurantById.drinks}</p>
                    <ButtonComponent buttonDesc={'Edit Restaurant'} clickAction={this.showHideForm} funcArgs={null} />
                </div>
            )
        } else {
            return (
                <div>
                    <h1> There seems to be an error retreiving your restaurant :( </h1>
                    <Link className="navBarLink" to={`/home/${this.props.userProfile.id}`}>Ok</Link>
                </div>
            )
        }
    }
}

export default Restaurant;