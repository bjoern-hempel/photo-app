import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Button } from '@material-ui/core';

const DesignAtomLinkButton = (props) => {
    const {
        history,
        to,
        onClick,
        onClose,
        classes = null,
        ...rest
    } = props;

    return (
        <Button classes={classes} color="inherit" onClick={(event) => {
            event.stopPropagation();
            onClick && onClick(event);
            onClose && onClose(event);
            history.push(to);
        }}>{ rest.children }</Button>
    )
}

DesignAtomLinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(DesignAtomLinkButton)