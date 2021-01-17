import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";

const DesignAtomListItem = (props) => {
    const {
        history,
        to,
        text,
        key,
        className,
        onClick,
        ...rest
    } = props;

    const listItemProps = {
        className: className,
        onClick: (event) => {
            onClick && onClick(event)
            history.push(to)
        }
    };

    if (key) {
        listItemProps.key = key;
    }

    return (
        <ListItem button {...listItemProps}>
            <ListItemIcon>{ rest.children }</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}

DesignAtomListItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    key: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default withRouter(DesignAtomListItem)