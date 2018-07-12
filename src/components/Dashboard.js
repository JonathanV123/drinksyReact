import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.userProfile.id
        const token = sessionStorage.getItem('jwtToken')
        console.log(props);
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
                this.props.renderResponse(errorMessage)
            })
        }
        this.state = {
            restaurants: null,
        }
    }
    render() {
        return (
            <div>
                <div className="testingContainer">
                    <h1>Dashboard!</h1>
                </div>
            </div>
        )
    }
}

export default Dashboard;


