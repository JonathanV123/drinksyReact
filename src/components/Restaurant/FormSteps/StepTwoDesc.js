
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
const StepTwoDesc = (props) => {
    const { classes } = props;
    if (props.formType === 'addForm') {
        return (
            <div className="eachStepContainer" >
                <h1 className="filterTitle" >Restaurant Description</h1>
                <form id='creation-form' noValidate autoComplete='off'>
                    <TextField
                        id="description"
                        className={classes.textField}
                        placeholder="Description"
                        label="description"
                        value={props.description}
                        onChange={props.handleChange('description')}
                        margin="normal"
                    />
                    <Button className={classes.button} variant="contained" onClick={() => props.checkStepCompletion('description')} color="primary">
                        Next
                        </Button>
                    <Button className={classes.button} variant="contained" onClick={props.handleFormStepBack} color="primary">
                        Back
                        </Button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="eachStepContainer" >
                <h1 className="filterTitle" >Edit Description</h1>
                <form id='creation-form' noValidate autoComplete='off'>
                    <TextField
                        id="description"
                        className={classes.textField}
                        placeholder="Description"
                        label="description"
                        value={props.description}
                        onChange={props.handleChange('description')}
                        margin="normal"
                    />
                    <Button className={classes.button} variant="contained" onClick={() => props.checkStepCompletion('description')} color="primary">
                        Ok
                        </Button>
                    <Button className={classes.button} variant="contained" onClick={props.handleFormStepBack} color="primary">
                        Back
                    </Button>
                </form>
            </div >
        )
    }
}

export default withStyles(styles)(StepTwoDesc);

