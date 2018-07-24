import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
    pos: {
        margin: 9,
        // textAlign: 'center',
    },
    happyHourPos: {
        margin: 4,
    }
};

const RestaurantPage = (props) => {
    const { classes } = props;
    const restaurantId = props.restaurant.id;
    return (
        <div className="restaurantView">
            <Typography className={classes.pos} variant="headline" component="h2">
                {props.restaurant.title}
            </Typography>
            <Typography className={classes.pos} component="p">
                {props.restaurant.description}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Wine: {props.restaurant.wine}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Cocktails: {props.restaurant.cocktails}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Food: {props.restaurant.food}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Beer: {props.restaurant.beer}
            </Typography>
            <Typography className={classes.happyHourPos} id="hotPinkCenter" component="h2">
                Happy Hour
            </Typography>
            <Typography id="centerMeHappyHour" className={classes.happyHourPos} color="textSecondary">
                {props.restaurant.fromStandard}{props.restaurant.fromTimeOfDay} to {props.restaurant.toStandard}{props.restaurant.toTimeOfDay}
            </Typography>
            <Link onClick={() => props.onRestaurantRemoval(restaurantId)} id="overideLink" to={`/home/${props.restaurant.owner}`}>Delete Restaurant</Link>
            <Button onClick={props.showHideForm} className={classes.pos} variant="contained" color="primary">
                Edit Restaurant
            </Button>
            <Link id="overideLink" to={`/home/${props.restaurant.owner}`}>Back</Link>
        </div >
    )

}

export default withStyles(styles)(RestaurantPage);
