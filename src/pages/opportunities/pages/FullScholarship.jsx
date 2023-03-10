import React from 'react';
import FullDB from '../database/FullScholarship.json';
import { Image } from 'react-bootstrap';
import styles from './ScholarshipTypes.module.css';

function FullScholarship(props) {
  // const ScholarshipLink = full.ScholarshipLink;

  return (
    <>
      <h1>Full Scholarship</h1>
      {FullDB.Full.map((full) => {
        const { name, details, url } = full;
        return (
          <div className={`${styles['types']}`}>
            {/* 
            <div className={styles.imageContainer}>
              <Image src={''} className={styles.logo} />
            </div>
               */}
            <div className={styles.infoContainer}>
              <h2>{name}</h2>
              <p>Description: {details}</p>
              <p>Link: {url}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FullScholarship;
