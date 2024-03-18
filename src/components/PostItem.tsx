import React, { FC } from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../types/types';

interface PostProps {
  post: IPost;
  remove: (post: IPost) => void;
}

const PostItem: FC<PostProps> = ({ post, remove }) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={(): void => router(`/posts/${post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={(): void => remove(post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
