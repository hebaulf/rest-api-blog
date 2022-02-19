import { StyledPosts } from './styles';
import Post from '../Post/Post';

const Posts = ({ posts }) => {
  return (
    <StyledPosts className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </StyledPosts>
  )
}

export default Posts;