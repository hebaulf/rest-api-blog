import { Link } from 'react-router-dom';
import { StyledSidebar } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <StyledSidebar className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">About me</span>
        <img src="https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="portrait" />
        <p> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Repudiandae atque veritatis dolorem tempora aspernatur itaque obcaecati. 
        </p>
      </div>

      <div className="sidebar__item">
        <span className="sidebar__title">Categories</span>
        <ul className="sidebar__list">
          {cats.map(cat => (
            <Link to={`/?cat=${cat.name}`}>
              <li key={cat.name} className="sidebar__list__item">{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebar__item">
        <span className="sidebar__title">Follow us</span>
        <div className="sidebar__social">
          <FontAwesomeIcon className="sidebar__social__icon" icon={brands('facebook')} />
          <FontAwesomeIcon className="sidebar__social__icon" icon={brands('twitter')} />
          <FontAwesomeIcon className="sidebar__social__icon" icon={brands('pinterest')} />
          <FontAwesomeIcon className="sidebar__social__icon" icon={brands('instagram')} />
        </div>
      </div>
    </StyledSidebar>
  )
}

export default Sidebar;