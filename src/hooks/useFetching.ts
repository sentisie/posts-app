import { useState } from 'react';

type AsyncCallback<T> = (...args: any[]) => Promise<T>;

type UseFetchingResult = [
  AsyncCallback<void>,
  boolean,
  string
]

export const useFetching = (callback: AsyncCallback<void>): UseFetchingResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const fetching: AsyncCallback<void> = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong');
      } else {
        setError(String(err));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};