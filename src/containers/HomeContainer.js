import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LoaderAnimation from '../components/Presentational/Loaders';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
});

const Loading = (props) => {
    return (
        <LoaderAnimation />
    )
}

const SignUp = (props) => {
    return (
        <div className="welcomeContainer">
            <span className="headlines" >Welcome to Drinksy!</span>
            <nav id="loginNav">
                <Link className="materialFont" to={'/createAccount'}>Create Account</Link>
                <h2> Or </h2>
                <Link className="materialFont" to={'/login'}>Login</Link>
            </nav>
        </div>
    )
}


class HomeContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        if (this.props.loading) {
            return <LoaderAnimation />
        } else {
            return <SignUp />
        }
    }
}

export default withStyles(styles)(HomeContainer);

