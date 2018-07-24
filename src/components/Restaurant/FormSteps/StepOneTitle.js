
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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
const StepOneTitle = (props) => {
    const { classes } = props;
    if (props.formType === 'addForm') {
        return (
            <div className="eachStepContainer">
                <h1 className="filterTitle">What's the name of the restaurant?</h1>
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
                        Next
                    </Button>
                </form>
            </div>
        )
    } else {
        console.log(props)
        return (
            <div className="eachStepContainer">
                <h1 className="filterTitle">Edit Restaurant Name</h1>
                <form id='creation-form' noValidate autoComplete='off'>
                    <TextField
                        id="title"
                        className={classes.textField}
                        placeholder="Title"
                        label="Restaurant name"
                        value={props.restaurant.title}
                        onChange={props.handleChange('title')}
                        margin="normal"
                    />
                    <Button className={classes.button} variant="contained"
                        onClick={() => { props.checkStepCompletion('title') }} color="primary">
                        Next
                    </Button>
                </form>
            </div>
        )
    }

}

export default withStyles(styles)(StepOneTitle);



