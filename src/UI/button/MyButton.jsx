import classes from './MyButton.module.scss';

const MyButton = ({ className, children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
