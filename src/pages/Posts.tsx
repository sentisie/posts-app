import { FC, useEffect, useRef, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter';
import PostService from '../API/PostService';
import Loader from '../UI/loader/Loader';
import { getPageCount } from '../utils/pages';
import MyButton from '../UI/button/MyButton';
import MyModal from '../UI/modal/MyModal';
import PostForm from '../components/PostForm';
import Pagination from '../UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../UI/select/MySelect';
import { IPost } from '../types/types';

const Posts: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filter, setFilter] = useState<{ sort: string; query: string }>({
    sort: '',
    query: '',
  });
  const [modal, setModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState<string>('10');
  const [page, setPage] = useState<number>(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef<HTMLDivElement | null>(null);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(+limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(+totalCount, +limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(+limit, page);
  }, [page, limit]);

  const createPostHandler = (newPost: IPost): void => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePostHandler = (newPost: IPost): void => {
    setPosts(posts.filter((post) => post.id !== newPost.id));
  };

  const changePage = (page: number): void => {
    setPage(page);
  };

  return (
    <div className="App">
      <section className="interactive-wrapper">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <PostFilter filter={filter} setFilter={setFilter} />
          <MySelect
            value={limit}
            onChange={(value) => setLimit(value)}
            defaultValue={'Number of posts'}
            options={[
              { value: '5', name: '5' },
              { value: '10', name: '10' },
              { value: '25', name: '25' },
              { value: '-1', name: 'All' },
            ]}
          />
        </div>
        <MyButton onClick={() => setModal(true)}>Create post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm onCreatePost={createPostHandler} />
        </MyModal>
      </section>
      {postError && <h1>An error occurred {postError}</h1>}{' '}
      <PostList
        remove={removePostHandler}
        posts={sortedAndSearchedPosts}
        title={'Posts'}
      />
      <div ref={lastElement}></div>
      {isPostsLoading && (
        <section className="loader-wrapper">
          <Loader />
        </section>
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
};

export default Posts;
