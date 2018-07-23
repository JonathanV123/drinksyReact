import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = {
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
};

class RestaruantStepper extends React.Component {

    render() {
        const { classes, theme } = this.props;

        return (
            <MobileStepper
                id="overideStepper"
                variant="progress"
                steps={8}
                position="static"
                activeStep={this.props.activeStep}
                className={classes.root}
            />
        );
    }
}

RestaruantStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RestaruantStepper);