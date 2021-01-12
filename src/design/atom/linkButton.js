import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Button } from '@material-ui/core';

const DesignAtomLinkButton = (props) => {
    const {
        history,
        to,
        onClick,
        ...rest
    } = props;

    return (
        <Button color="inherit" onClick={(event) => {
            onClick && onClick(event)
            history.push(to)
        }}>{ rest.children }</Button>
    )
}

DesignAtomLinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(DesignAtomLinkButton)