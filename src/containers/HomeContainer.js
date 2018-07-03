import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RestaurantContainer from './RestaurantContainer';
import LoginContainer from './LoginContainer';
import '../App.css';


const Navbar = (props) => {
    console.log(props);
    return (
        <div className="navBarContainer">
            <nav>
                <Link className="navBarLink" to={'/'}>Home</Link>
                <Link className="navBarLink" to={'/restaurant'}>Restaurants</Link>
                <Link className="navBarLink" to={'/account'}>Account</Link>
            </nav>
        </div>
    )
}

const Home = (props) => {
    return (
        <h1>Welcome</h1>
    )
}
const SignUp = (props) => {
    return (
        <div>
            <div className="welcomeContainer">
                <h1>Welcome to Drinksy!</h1>
            </div>
            <div className="blankForNow">
                <nav id="loginNav">
                    <Link className="navBarLink" to={'/createAccount'}>Create Account</Link>
                    <h2> Or </h2>
                    <Link className="navBarLink" to={'/login'}>Login</Link>
                </nav>
            </div>
        </div>
    )
}

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const loggedIn = this.props.loggedIn;
        if (loggedIn) {
            return (
                <div id="homeContainer">
                    <Navbar />
                    <Route
                        path='/'
                        render={(props) =>
                            <Home
                                {...props}
                                loggedIn={loggedIn}
                                userLoggedIn={this.props.userLoggedIn}
                            />
                        }
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <SignUp />
                    <Route
                        path='/user'
                        render={(props) =>
                            <LoginContainer
                                {...props}
                                loggedIn={loggedIn}
                                userLoggedIn={this.props.userLoggedIn}
                                retrieveToken={this.props.retrieveToken}
                            />
                        }
                    />
                </div>
            )
        }
    }
}

export default HomeContainer;
