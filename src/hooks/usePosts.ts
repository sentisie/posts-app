import { useMemo } from 'react';

export const useSortedPosts = (posts: any[], sort: string) => {
  const sortedPosts: any[] = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: any[], sort: string, query: string) => {
  const sortedPosts: any[] = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts: any[] = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
