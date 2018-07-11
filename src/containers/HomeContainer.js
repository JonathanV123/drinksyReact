import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dashboard from '../components/Dashboard';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
});



class HomeContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        if (this.props.loggedIn) {
            return (
                <Dashboard {...this.props} />
            )
        } else {
            return null
                {/* <Redirect to="/login" /> */}
                
           
        }
    }
}

export default withStyles(styles)(HomeContainer);

