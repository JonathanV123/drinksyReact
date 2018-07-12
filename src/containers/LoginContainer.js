import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Notification from '../components/Presentational/Notification';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
});


// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         props.userLoggedIn === true
//             ? <Component {...props} />
//             : <Redirect to='/' />
//     )} />
// )

// const Protected = () => {
//     return (
//         <h1> Protected </h1>
//     )
// }

class LoginContainer extends Component {
    constructor(props) {
        super(props);

      
    }

    render() {
        return (
            <div>
                <Route
                    exact path='/createAccount'
                    render={(props) =>
                        <SignUpForm
                            {...props}
                            loggedIn={this.props.loggedIn}
                            userLoggedIn={this.props.userLoggedIn}
                            retrieveToken={this.props.retrieveToken}
                            renderResponse={this.renderResponse}
                        />
                    }
                />
                <Route
                    exact path='/login'
                    render={(props) =>
                        <LoginForm
                            {...props}
                            loggedIn={this.props.loggedIn}
                            userLoggedIn={this.props.userLoggedIn}
                            retrieveToken={this.props.retrieveToken}
                            renderResponse={this.renderResponse}
                            userInfo={this.props.userInfo}
                            userProfile={this.props.userProfile}
                        />
                    }
                />
                <Notification
                    responseMessage={this.state.responseMessage}
                    showNotification={this.state.showNotification}
                    clearNotification={this.clearNotification}
                />
            </div>

        )
    }
}

export default withStyles(styles)(LoginContainer);

