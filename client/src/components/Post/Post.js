import { Link } from "react-router-dom";
import { StyledPost } from './styles';

const Post = ({ post }) => {
  const publicFolder = 'http://localhost:5002/images/';

  return (
    <StyledPost className="post">
      {post.photo && (
        <img className="post__img" src={publicFolder + post.photo} alt={post.title} />
      )}
      <div className="post__info">
        <div className="post__cats">
          {post.categories.map((category) => (
            <Link key={category._id} to="/posts?cat=Music">
              <span className="post__cat">{category.name}</span>
            </Link>
          ))}
        </div>
       
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