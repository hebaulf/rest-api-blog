import { StyledSinglePost } from './styles';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import axios from 'axios';


const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  // console.log(path);

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      console.log(res.data);
      setPost(res.data);
    }; 
    getPost();
  }, [path])
  
  return (
    <StyledSinglePost className="single-post">
      <div className="single-post__wrapper">
        {post.photo && (
          <img className="single-post__img" src={post.photo} alt="" />
        )}
        <h1 className="single-post__title">{post.title}</h1>
        <div className="single-post__edit">
          <FontAwesomeIcon className="single-post__icon" icon={regular('pen-to-square')} />
          <FontAwesomeIcon className="single-post__icon" icon={regular('trash-can')} />
        </div>
        <div className="single-post__info">
          <span>
            Author:
            <Link to={`/?user=${post.username}`}><strong className="single-post__author">{post.username}</strong></Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="single-post__desc">{post.desc}</p>
      </div>
    </StyledSinglePost>
  );
}

export default SinglePost;