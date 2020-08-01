import React from 'react';
import styles from './Spinner.css';

export function Spinner() {
    return (
        <div className={`button is-loading is-large ${styles.spinner}`}>Loading</div>
    );
}