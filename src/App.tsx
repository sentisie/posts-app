import './hooks/styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import React, { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect((): void => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
