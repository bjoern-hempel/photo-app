// import default components
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

// material ui core
import { withStyles } from "@material-ui/core/styles";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";

// import own components
import DesignAtomLinkButton from './linkButton';

// define some classes
const styles = theme => ({
    linkButtonLeftMargin: {
        marginLeft: 20
    }
});

const DesignAtomListItem = (props) => {
    const {
        history,
        to,
        text,
        key,
        onClose = null,
        onClick = null,
        buttonIcon = null,
        buttonTo = null,
        className,
        classes,
        ...rest
    } = props;

    const listItemProps = {
        className: className,
        onClick: (event) => {
            onClick && onClick(event);
            onClose && onClose(event);
            history.push(to);
        }
    };

    if (key) {
        listItemProps.key = key;
    }

    return (
        <ListItem button {...listItemProps}>
            <ListItemIcon>{ rest.children }</ListItemIcon>
            <ListItemText primary={text} />
            {buttonIcon && buttonTo ? <DesignAtomLinkButton to={buttonTo} onClose={onClose} classes={{root: classes.linkButtonLeftMargin}}>{buttonIcon}</DesignAtomLinkButton> : <React.Fragment />}
        </ListItem>
    )
}

DesignAtomListItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    key: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default withRouter(withStyles(styles, { withTheme: true })(DesignAtomListItem));