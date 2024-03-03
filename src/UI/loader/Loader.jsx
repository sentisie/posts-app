import React from 'react';
import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
