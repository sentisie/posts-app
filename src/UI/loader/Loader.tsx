import React, { FC } from 'react';
import classes from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
