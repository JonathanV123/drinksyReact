
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: 8,
    },
});

const HeaderMessage = (props) => {
    if (props.formType === 'addForm') {
        return (
            <h1 className="filterTitle">What's the name of the restaurant?</h1>
        )
    } else {
        return (
            <h1 className="filterTitle">Edit Restaurant Name</h1>
        )
    }
};

const StepOneTitle = (props) => {
    const { classes } = props;
    return (
        <div className="eachStepContainer">
            <HeaderMessage formType={props.formType} />
            <form id='creation-form' noValidate autoComplete='off'>
                <TextField
                    id="title"
                    className={classes.textField}
                    placeholder="Title"
                    label="Restaurant name"
                    value={props.title}
                    onChange={props.handleChange('title')}
                    margin="normal"
                />
                <Button className={classes.button} variant="contained"
                    onClick={() => { props.checkStepCompletion('title') }} color="primary">
                    Save
                </Button>
            </form>
        </div >
    )
};

StepOneTitle.propTypes = {
    formType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    checkStepCompletion: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(StepOneTitle);



