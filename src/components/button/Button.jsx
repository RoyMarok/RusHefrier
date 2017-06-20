import React from 'react';
import Bem from 'bem-react-core';
import './Button.css';
import PropTypes from 'prop-types';

function Button({value, size, mix, theme}){
    return (
        <Bem block="button" mods={{ mix, size,theme }}>{value}</Bem>
    );
}

Button.propTypes = {
    value: PropTypes.string,
    mix: PropTypes.string,
    size: PropTypes.string,
    theme: PropTypes.string
};

export default Button;
