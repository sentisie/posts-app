import classes from './MyButton.module.scss';
import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MyButton: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
