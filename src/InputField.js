import React from 'react';


const InputField = ({value, onChange, placeholder}) => (
    <div>
        <input
            className='input-field'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
)

export default InputField
