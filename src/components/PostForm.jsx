import React, { useState } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const PostForm = ({ onCreatePost }) => {
  //Состояния элементов Названия и Описания
  const [post, setPost] = useState({ title: '', body: '' });
  const [uniqueId, setUniqueId] = useState(101);

  //Обработчики для сохранения состояния событий
  const inputTitleChangeHandler = (event) =>
    setPost({ ...post, title: event.target.value });

  const inputBodyChangeHandler = (event) =>
    setPost({ ...post, body: event.target.value });

  //Обработчик по добавлению нового поста
  const addPostHandler = (event) => {
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
