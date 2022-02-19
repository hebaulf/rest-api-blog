import { StyledHome } from './styles';
import { useLocation } from "react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])

  return (
    <>
      <Header />
      <StyledHome className="home">    
          <Posts posts={posts} />
          <Sidebar />
      </StyledHome>
    </>
  )
}

export default Home;