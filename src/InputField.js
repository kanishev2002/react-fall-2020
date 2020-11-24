import React from 'react'
import styles from './inputField.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const InputField = ({value, onChange, placeholder}) => (
    <div className={cx('inputField')}>
        <input
            className={cx('inputBorder')}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
)

export default InputField
