import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FC } from 'react';
import { IPost } from '../types/types';

interface PostListProps {
  posts: IPost[];
  title: string;
  remove: (newPost: IPost) => void;
}

const PostList: FC<PostListProps> = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '700' }}>
        No posts were found
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} key={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
