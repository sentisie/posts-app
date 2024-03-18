import classes from './MyInput.module.scss';
import React, { FC, InputHTMLAttributes } from 'react';

const MyInput: FC<
  React.PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
> = (props) => {
  return <input className={classes.myInput} {...props} />;
};
export default MyInput;
