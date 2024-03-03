import { useEffect, useRef, useState } from 'react';
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

function Posts() {
  //Массив с данными
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPostHandler = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePostHandler = (newPost) => {
    setPosts(posts.filter((post) => post.id !== newPost.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      {/*interactive-block*/}
      <section className="interactive-wrapper">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <PostFilter filter={filter} setFilter={setFilter} />
          <MySelect
            value={limit}
            onChange={(value) => setLimit(value)}
            defaultValue={'Number of posts'}
            options={[
              { value: 5, name: '5' },
              { value: 10, name: '10' },
              { value: 25, name: '25' },
              { value: -1, name: 'All' },
            ]}
          />
        </div>
        <MyButton onClick={() => setModal(true)}>Create post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm onCreatePost={createPostHandler} />
        </MyModal>
      </section>
      {/*display-posts*/}
      {postError && <h1>An error occured ${postError}</h1>}
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
      {/*pagination-pages*/}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
