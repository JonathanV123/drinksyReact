import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    pos: {
        margin: 9,
    },
    happyHourPos: {
        margin: 4,
    }
};

const FinalStepCheck = (props) => {
    const { classes } = props;
    return (
        <div className="restaurantView">
            <Typography className={classes.pos} variant="headline" component="h2">
                {props.title}
            </Typography>
            <Typography className={classes.pos} component="p">
                {props.description}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Wine: {props.wine}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Cocktails: {props.cocktails}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Food: {props.food}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Beer: {props.beer}
            </Typography>
            <Typography className={classes.happyHourPos} id="hotPinkCenter" component="h2">
                Happy Hour
            </Typography>
            <Typography id="centerMeHappyHour" className={classes.happyHourPos} color="textSecondary">
                {props.from}{props.fromTimeOfDay} to {props.to}{props.toTimeOfDay}
            </Typography>
        </div >
    )
}

FinalStepCheck.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    food: PropTypes.string.isRequired,
    beer: PropTypes.string.isRequired,
    wine: PropTypes.string.isRequired,
    cocktails: PropTypes.string.isRequired,
    toTimeOfDay: PropTypes.string.isRequired,
    fromTimeOfDay: PropTypes.string.isRequired,
};

export default withStyles(styles)(FinalStepCheck);