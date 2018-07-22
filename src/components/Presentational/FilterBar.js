import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HappyHourIcon from '@material-ui/icons/Mood';
import FoodIcon from '@material-ui/icons/LocalDining';
import WineIcon from '@material-ui/icons/LocalBar';
import BeerIcon from '@material-ui/icons/LocalDrink';
import AllRestaurantsIcon from '@material-ui/icons/AllInclusive';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class FilterBar extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        // Leaving highlighting out as it crashes react. Found no available solution
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        console.log(this.props)
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        id="filterTabsCenter"
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        
                    >
                        <Tab label="All" onClick={() => this.props.filterFoodAndDrink('filterActive')} icon={<AllRestaurantsIcon />} />
                        <Tab label="Happy Hour" onClick={() => this.props.filterFoodAndDrink('filterHappyHour')} icon={<HappyHourIcon />} />
                        <Tab label="Cocktails" onClick={() => this.props.filterFoodAndDrink('filterCocktails')} icon={<WineIcon />} />
                        <Tab label="Beer" onClick={() => this.props.filterFoodAndDrink('filterBeer')} icon={<BeerIcon />} />
                        <Tab label="Food" onClick={() => this.props.filterFoodAndDrink('filterFood')} icon={<FoodIcon />} />
                        <Tab label="Wine" onClick={() => this.props.filterFoodAndDrink('filterWine')} icon={<WineIcon />} />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

FilterBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterBar);


// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import PhoneIcon from '@material-ui/icons/Phone';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';

// export default class IconLabelTabs extends React.Component {
//     state = {
//         value: 0,
//     };

//     handleChange = (event, value) => {
//         this.setState({ value });
//     };

//     render() {
//         return (
//             <div id="filterTabsContainer">
//                 <Paper style={{ width: 500 }}>
//                     <Tabs
//                         value={this.state.value}
//                         onChange={this.handleChange}
//                         fullWidth
//                         indicatorColor="secondary"
//                         textColor="secondary"
//                     >
//                         <Tab icon={<HappyHourIcon />} label="Happy Hour" />
//                         <Tab icon={<FoodIcon />} label="Food" />
//                         <Tab icon={<WineIcon />} label="Wine" />
//                         <Tab icon={<WineIcon />} label="Beer" />
//                         <Tab icon={<WineIcon />} label="Cocktails" />
//                     </Tabs>
//                 </Paper>
//             </div>
//         );
//     }
// }