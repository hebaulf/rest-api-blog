import { Link } from "react-router-dom";
import { StyledPost } from './styles';

const Post = ({ post }) => {
  const publicFolder = 'https://restapimern-blog.herokuapp.com/images/';

  return (
    <StyledPost className="post">
      {post.photo && (
        <img className="post__img" src={publicFolder + post.photo} alt={post.title} />
      )}
      <div className="post__info">
       
        <Link to={`/post/${post._id}`}>
          <span className="post__title">{post.title}</span>
        </Link>
        <hr />
        
        <span className="post__date">{new Date(post.createdAt).toDateString()}</span>
      </div>
      
      <p className="post__desc">{post.desc}</p>
    </StyledPost>
  )
}

export default Post;