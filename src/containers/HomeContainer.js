import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import LoaderAnimation from '../components/Presentational/Loaders';
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
});

const SignUp = (props) => {
    return (
        <div className="welcomeContainer">
            <span className="headlines" >Welcome to Drinksy!</span>
            <nav id="loginNav">
                <Link className="materialFont" to={'/createAccount'}>Create Account</Link>
                <h2> Or </h2>
                <Link className="materialFont" to={'/login'}>Login</Link>
            </nav>
            <h3 className="homeAlternate"> Don't feel like making an account?</h3>
            <h4 className="homeAlternate"> Use <span className="highlighted">test@test.com</span> for <span className="highlighted">email</span>, and <span className="highlighted">test</span> as the <span className="highlighted">password</span> to quickly view the app.</h4>
        </div>
    )
}

const HomeContainer = (props) => {
    if (props.loading) {
        return <LoaderAnimation />
    } else {
        return <SignUp />
    }

}

HomeContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    userProfile: PropTypes.object.isRequired
}

export default withStyles(styles)(HomeContainer);

