import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleRestaurantData } from '../actions/restaurantActions';
import AddRestaurantForm from '../components/Restaurant/AddRestaurantForm';
import Restaurant from '../components/Restaurant/Restaurant';

const mapStateToProps = (state) => {
    return {
        restaurantData: state.restaurantData.currentRestaurantData,
        isPending: state.restaurantData.isPending,
        error: state.restaurantDataFetch.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestRestaurantData: () => dispatch(handleRestaurantData()),
        // onPersonRemoval: (name) => dispatch(onPersonRemoval(name)),
        // onEditrestaurantData: (person) => dispatch(onEditrestaurantData(person)),
    }
}

const PeopleNav = (props) => {
    return (
        <nav>
            <Link className="navBarLink" to={'/people/addRestaurant'}>Add Restaurant</Link>
            <Link className="navBarLink" to={'/people/getRetaurants'}>Get Restaurants</Link>
        </nav>
    )
}

const RestaurantContainer = (props) => {
    const restaurantData = props.restaurantData;
    const onPersonRemoval = props.onPersonRemoval;
    const onEditrestaurantData = props.onEditrestaurantData;
    const requestRestaurantData = props.requestRestaurantData;
    const isPending = props.isPending;
    return (
        <div>
            <PeopleNav />
            <Route
                exact path='/restaurant/addRestaurant'
                component={AddRestaurantForm}
            />
            <Route
                exact path='/restaurant'
                render={(props) =>
                    <Restaurant
                        {...props}
                        restaurantData={restaurantData}
                        isPending={isPending}
                        onPersonRemoval={onPersonRemoval}
                        requestRestaurantData={requestRestaurantData}
                        onEditrestaurantData={onEditrestaurantData}
                    />
                }
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
