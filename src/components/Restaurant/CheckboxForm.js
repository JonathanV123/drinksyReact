import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    size: {
        width: 40,
        height: 40,
    },
    sizeIcon: {
        fontSize: 20,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const drinkChoicesWine = [
    {
        value: 'Amazing'
    },
    {
        value: 'Good'
    },
    {
        value: 'Decent'
    },
    {
        value: 'Bad'
    },
];

const FormList = (props) => {
    const checkboxers = drinkChoicesWine.map((drink, index) => {
        return (
            <FormControlLabel
                key={drink.value}
                control={
                    <Checkbox
                        onChange={props.handleChange(`checked${drink.value}`)}
                        value={`checked${drink.value}`}
                        checked={props.state[`checked${drink.value}`]}
                        classes={{
                            root: props.classes.root,
                            checked: props.classes.checked,
                        }}
                    />
                }
                label={drink.value}
            />
        )
    });
    return (
        <div className="peopleContainer">
            {checkboxers}
        </div>
    )
}
const FormContainer = (props) => {
    return (
        <FormGroup>
            <FormList state={props.state} handleChange={props.handleChange} classes={props.classes} />
        </FormGroup >
    )
}

class CheckboxLabels extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            checkedChardonnay: false,
            checkedPinotGrigio: false,
            checkedSauvignonBlanc: false,
            checkedCabernetSauvignon: false,
            checkedSyrah: false,
            checkedMalbec: false,
            checkedMerlot: false,
            checkedPinotNoir: false,
            checkedRedBlend: false,
            checkedGrenache: false,
        }

    }

    handleChange = name => event => {
        var wineCollection = [];

        this.setState({ [name]: event.target.checked });
        for (var key in this.state) {
            if (this.state[key] === true) {
                wineCollection.push(key)
            }
            console.log(this.state[key])
            console.log(wineCollection)
        }
    };

    render() {
        console.log(this.state)
        const { classes } = this.props;
        return (
            <div>
                <FormContainer state={this.state} handleChange={this.handleChange} classes={classes} />
            </div>
        );
    }
}

export default withStyles(styles)(CheckboxLabels);