import React, { useContext } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div style={{ paddingTop: '160px' }}>
      <h1 style={{ marginBottom: '20px' }}>Login in to app</h1>
      <form onSubmit={login}>
        <article
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '300px',
          }}
        >
          <MyInput type="text" placeholder="Enter login" />
          <MyInput
            style={{ marginBottom: '20px' }}
            type="password"
            placeholder="Enter password"
          />
          <MyButton>Log In</MyButton>
        </article>
      </form>
    </div>
  );
};

export default Login;
