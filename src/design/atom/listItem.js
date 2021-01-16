import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";

const DesignAtomListItem = (props) => {
    const {
        history,
        to,
        text,
        className,
        onClick,
        ...rest
    } = props;

    return (
        <ListItem button key={text} className={className} onClick={(event) => {
            onClick && onClick(event)
            history.push(to)
        }}>
            <ListItemIcon>{ rest.children }</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}

DesignAtomListItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(DesignAtomListItem)