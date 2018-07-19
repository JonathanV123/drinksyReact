import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
});

class DrinkReview extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem onClick={() => this.props.handleSelection('Amazing', this.props.drinkType)} button>
                        <ListItemText primary="Amazing" />
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => this.props.handleSelection('Good', this.props.drinkType)} button divider>
                        <ListItemText primary="Good" />
                    </ListItem>
                    <ListItem onClick={() => this.props.handleSelection('Decent', this.props.drinkType)} button>
                        <ListItemText primary="Decent" />
                    </ListItem>
                    <Divider light />
                    <ListItem onClick={() => this.props.handleSelection('Bad', this.props.drinkType)} button>
                        <ListItemText primary="Bad" />
                    </ListItem>
                </List>
            </div>
        );
    }
}



DrinkReview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrinkReview);