import React from 'react';
import styles from './Button.module.scss';

const Button = ({text, action, disabled}) => {
    return (
        <div>
            <button disabled={disabled} onClick={action} className={styles.btn}>
                {text}
            </button>
        </div>
    );
};

export default Button;
