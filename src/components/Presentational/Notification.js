import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const Notification = (props) => {
    if (props.responseMessage) {
        return (
            <Paper className="paperNotifcationContainer" elevation={5}>
                <Typography className="paperNotifcation" variant="headline" component="h3">
                    {props.responseMessage}
                </Typography>
                <Button variant="contained" onClick={props.clearNotification} color="primary">
                    Ok
                    </Button>
            </Paper>
        )
    } else {
        return null;
    }
}
export default Notification;
