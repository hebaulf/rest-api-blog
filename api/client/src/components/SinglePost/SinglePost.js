import { StyledSinglePost } from './styles';
import { Context } from '../../context/Context';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { axiosInstance } from '../../config';


const SinglePost = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const publicFolder = 'https://restapimern-blog.herokuapp.com/images/';

  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }; 
    getPost();
  }, [path])

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, { 
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {}
  } 

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${post._id}`, { 
        username: user.username, 
        title, 
        desc,
      });
      // window.location.reload('/');
      setUpdateMode(false);
    } catch (err) {}
  }
  
  return (
    <StyledSinglePost className="single-post">
      <div className="single-post__wrapper">
        {post.photo && (
          <img 
            className="single-post__img" 
            src={publicFolder + post.photo} 
            alt={post.title} 
          />
        )}
        {updateMode 
        ? <input 
            type="text" 
            value={title} 
            className="single-post__title--input" 
            onChange={(e) => setTitle(e.target.value)} 
            autoFocus 
          /> 
        : (
          <>
            <h1 className="single-post__title">{title}</h1>
            {post.username === user?.username && (
              <div className="single-post__edit">
                <FontAwesomeIcon 
                  icon={regular('pen-to-square')} 
                  className="single-post__icon" 
                  onClick={() => setUpdateMode(true)} 
                />
                <FontAwesomeIcon 
                  icon={regular('trash-can')} 
                  className="single-post__icon" 
                  onClick={handleDelete} 
                />
              </div>
            )}
          </>
        )}
        <div className="single-post__info">
          <span>
            Author:
            <Link to={`/?user=${post.username}`}>
              <strong className="single-post__author">{post.username}</strong>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode 
        ? <textarea 
            value={desc} 
            className="single-post__desc--input" 
            onChange={(e) => setDesc(e.target.value)} 
          />
          
        : (
          <p className="single-post__desc">{desc}</p>
        )}
        {updateMode && ( <button className="single-post__desc__btn" onClick={handleUpdate}>Update</button> )}
      </div>
    </StyledSinglePost>
  );
}

export default SinglePost;