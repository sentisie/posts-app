import React, { FC, useState } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostFormProps {
  onCreatePost: (newPost: Post) => void;
}

const PostForm: FC<PostFormProps> = ({ onCreatePost }) => {
  const [post, setPost] = useState({ title: '', body: '' });
  const [uniqueId, setUniqueId] = useState(101);

  const inputTitleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => setPost({ ...post, title: event.target.value });

  const inputBodyChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => setPost({ ...post, body: event.target.value });

  const addPostHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setUniqueId((prevId) => prevId + 1);
    const newPost = {
      ...post,
      id: uniqueId,
    };
    onCreatePost(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <div>
      <form action="">
        <MyInput
          value={post.title}
          onChange={inputTitleChangeHandler}
          type="text"
          placeholder="Post name"
        />
        <MyInput
          style={{ marginBottom: '10px' }}
          value={post.body}
          onChange={inputBodyChangeHandler}
          type="text"
          placeholder="Post body"
        />
        <MyButton
          style={{ padding: '10px 15px', width: '130px' }}
          onClick={addPostHandler}
        >
          Create post
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;
