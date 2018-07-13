import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

const Navbar = (props) => {
    console.log(props);
    return (
        <div className="navBarContainer">
            <nav>
                <Link className="navBarLink" to={'/'}>Home</Link>
                <Link className="navBarLink" to={'/restaurant'}>Restaurants</Link>
                <button className="navBarLink" onClick={props.logout} >Logout</button>
            </nav>
        </div>
    )
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.userProfile.id
        const token = sessionStorage.getItem('jwtToken')
        if (this.props.loading === false) {
            axios({
                method: 'get',
                url: `http://localhost:8080/home/${userId}`,
                headers: { 'Authorization': "bearer " + token },
            }).then((response) => {
                console.log(response);
                this.setState((prevState, props) => {
                    return {
                        restaurants: null,
                    }
                })
            }).catch((err) => {
                console.log(err.response);
                const errorMessage = err.response.data.message;
                // this.props.renderResponse(errorMessage)
            })
        }
        this.state = {
            restaurants: null,
            logout: null,
        }
    }
    logout = () => {
        sessionStorage.removeItem('jwtToken');
        window.location.reload();
    }

    render() {
        return (
            <div>
                <div className="testingContainer">
                    <Navbar logout={this.logout} />
                    <h1>Dashboard!</h1>
                </div>
            </div>
        )
    }
}

export default Dashboard;


