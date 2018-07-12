import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
});

const Loading = (props) => {
    return (
        <div>
            <h1>Loading</h1>
        </div>
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
    }
    render() {
        if (this.props.loading) {
            return <Loading />
        } else {
            return <SignUp />
        }
    }
}

export default withStyles(styles)(HomeContainer);

