import React, { createContext } from 'react';

interface AuthContextObj {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

const initialAuthContext: AuthContextObj = {
  isAuth: false,
  setIsAuth: () => {},
  isLoading: false,
};
export const AuthContext = createContext<AuthContextObj>(initialAuthContext);
