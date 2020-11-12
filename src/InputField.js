import React from 'react';


const InputField = ({value, onChange, placeholder}) => (
    <div className='input-field'>
        <input
            className='input-border'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
)

export default InputField
