import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Notification extends Component {
    // constructor(props) {
    //     super(props);
    // }

    clearNotification = () => {
        this.setState((prevState, props) => {
            return {
                showNotification: false,
                responseMessage: ''
            }
        })
    }
    renderResponse = (err) => {
        if (err) {
            this.setState((prevState, props) => {
                return {
                    showNotification: true,
                    responseMessage: err
                }
            })
        }
    }
    render() {
        if (this.props.loggedIn) {
            return (
                <Paper className="paperNotifcationContainer" elevation={5}>
                    <Typography className="paperNotifcation" variant="headline" component="h3">
                        {this.props.responseMessage}
                    </Typography>
                    <Button variant="contained" onClick={this.props.clearNotification} color="primary">
                        Ok
                    </Button>
                </Paper>
            )
        } else {
            return null;
        }
    }
}
export default Notification;
