import React, { FC, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes/routes';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import { AuthContext } from '../context';
import Loader from '../UI/loader/Loader';

const AppRouter: FC = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} element={<route.element />} path={route.path} />
      ))}
      <Route path="/*" element={<Posts />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} element={<route.element />} path={route.path} />
      ))}
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
