import React from 'react'
import PropTypes from 'prop-types'

import './ConditionalInput.css'


export default function ConditionalInput(props) {

    const { labelText, type, inputName, inputValue, returnValue, placeholderText } = props


    return (
        <div className='conditional-input-wrapper'>
             {labelText !== '' && <label>{labelText}</label>}
            <input
                type={type}
                name={inputName}
                value={inputValue}
                onChange={returnValue}
                placeholder={placeholderText}
                className={`input conditional-input-field`}
            />
        </div>
    )

}

ConditionalInput.propTypes = {
    returnValue: PropTypes.func.isRequired,

    type: PropTypes.string,
    inputName: PropTypes.string,
    inputValue: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    placeholderText: PropTypes.string,                          
}

ConditionalInput.defaultProps = {
    type: 'text',
    inputName: 'inputfield',
    placeholderText: ''
}