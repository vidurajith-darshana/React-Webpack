import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import DoneIcon from '@material-ui/icons/Done';
// import TagFacesIcon from '@material-ui/icons/TagFaces';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing.unit / 2,
        backgroundColor:'black',
    },
    chip: {

        margin: theme.spacing.unit / 2,
    },
});

class ChipsArray extends React.Component {
    state = {
        chipData: [
            { key: 0, label: 'g' },

        ],
    };

    handleDelete = data => () => {

        const chipData = [...this.state.chipData];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({ chipData });
    };
    handleClick = () => {

    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                {this.state.chipData.map(data => {

                    return (
                        <Chip
                            key={data.key}
                            onClick={this.handleClick}
                            label={data.label}
                            onDelete={this.handleDelete(data)}
                            className={classes.chip}
                            deleteIcon={null}
                        />
                    );
                })}
            </Paper>
        );
    }
}

ChipsArray.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChipsArray);