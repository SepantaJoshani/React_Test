import React from 'react';
import styles from './Celebrity.module.css';

function Celebrity({ celebrity }) {
    return (
        <div className={styles.container}>
            <div>
                <h4>{celebrity.name}</h4>
                <h5>Birth Date: {celebrity.dob}</h5>
            </div>
            <img width="100em" height="150em" src={celebrity.image} alt={celebrity.name} />
        </div>
    );
}

export default Celebrity;
