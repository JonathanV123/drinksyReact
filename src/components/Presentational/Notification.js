import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Notification extends Component {
    render() {
        if (this.props.responseMessage) {
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
