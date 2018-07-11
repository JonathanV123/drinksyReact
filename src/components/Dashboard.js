import React, { Component } from 'react';
import axios from 'axios';



const token = sessionStorage.getItem('jwtToken');
// const restaurants = (props) =>{

// }

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: null,
        }
    }
    componentDidMount() {
        console.log(this.props.userProfile.userId);
        const userId = this.props.userProfile.userId
        console.log('MOUNTED')
        console.log(userId);
        axios({
            method: 'get',
            url: `http://localhost:8080/home/${userId}`,
            headers: { 'Authorization': "bearer " + token },
        }).then((response) => {
            const tempArr = []
            console.log(response.data);
            response.data.forEach(restaurant => {
                tempArr.push(restaurant);
            });
            this.setState((prevState, props) => {
                return {
                    restaurants: tempArr,
                }
            })

            console.log(response);
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


