import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../UI/loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <section className="post">
      <div className="container">
        <section className="post__details">
          <h1>Opened post with ID = {params.id}</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              {post.id}. {post.title}
            </div>
          )}
        </section>
        <section className="post__comments">
          <h2>Comments</h2>
          {isComLoading ? (
            <Loader />
          ) : (
            <div>
              {comments.map((comment) => (
                <div key={comment.id} style={{ marginTop: '15px' }}>
                  <h5 style={{ borderTop: '1px solid teal' }}>
                    {comment.email}
                  </h5>
                  <div style={{ borderBottom: '1px solid teal' }}>
                    {comment.body}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default PostIdPage;
