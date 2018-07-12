import React, { Component } from 'react';
import axios from 'axios';


const token = sessionStorage.getItem('jwtToken');

class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            restaurants: null,
        }
    }
    componentDidMount() {
        const userId = this.props.userProfile.userId
        axios({
            method: 'get',
            url: `http://localhost:8080/home/${userId}`,
            headers: { 'Authorization': "bearer " + token },
        }).then((response) => {
            this.setState((prevState, props) => {
                return {
                    restaurants: null,
                }
            })
        }).catch((err) => {
            console.log(err);
            // const errorMessage = err.response.data.message;
            // this.props.renderResponse(errorMessage)
        })
    };

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


