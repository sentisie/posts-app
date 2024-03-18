import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import MyButton from '../button/MyButton';

const Navbar: FC = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = (): void => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div style={{ marginBottom: '20px' }} className="navbar">
      <div className="navbar__links">
        <Link to="/about">About app</Link>
        <MyButton
          style={{ border: '1px solid #fff', color: '#fff' }}
          onClick={logout}
        >
          Log out
        </MyButton>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
