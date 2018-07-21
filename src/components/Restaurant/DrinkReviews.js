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


const DrinkReview = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List id="noPadding" component="nav">
                <ListItem onClick={() => { props.handleSelection('Amazing', props.drinkOrFoodType); props.formStepComplete() }} button>
                    <ListItemText primary="Amazing" />
                </ListItem>
                <Divider />
                <ListItem onClick={() => { props.handleSelection('Good', props.drinkOrFoodType); props.formStepComplete() }} button divider>
                    <ListItemText primary="Good" />
                </ListItem>
                <ListItem onClick={() => { props.handleSelection('Decent', props.drinkOrFoodType); props.formStepComplete() }} button>
                    <ListItemText primary="Decent" />
                </ListItem>
                <Divider light />
                <ListItem onClick={() => { props.handleSelection('Bad', props.drinkOrFoodType); props.formStepComplete() }} button>
                    <ListItemText primary="Bad" />
                </ListItem>
            </List>
        </div>
    );
}



DrinkReview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrinkReview);