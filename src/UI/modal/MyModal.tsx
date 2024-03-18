import React, { FC, ReactNode } from 'react';
import classes from './MyModal.module.scss';

interface ModalProps {
  children?: ReactNode;
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
}

const MyModal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses: string[] = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible && setVisible(false)}
    >
      <div
        className={classes.myModalContent}
        onClick={(event: React.MouseEvent<HTMLDivElement>) =>
          event.stopPropagation()
        }
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
