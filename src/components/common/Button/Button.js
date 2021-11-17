import React from 'react';
import styles from './Button.module.scss';

const Button = ({text, action}) => {
    return (
        <div>
            <button className={styles.btn}/>
        </div>
    );
};

export default Button;
