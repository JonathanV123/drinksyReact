import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function RestaurantCard(props) {
    console.log(props)
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {props.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Wine: {props.wine}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Cocktails:{props.cocktails}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Food:{props.food}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Beer:{props.beer}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link className="navBarLink" to={`/restaurant/${props.restaurantId}`}>View Restaurant</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

RestaurantCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantCard);