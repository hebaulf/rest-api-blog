import { Link } from "react-router-dom";
import { StyledTopbar, StyledUserImage } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const TopBar = () => {
  const user = false;

  return (
    <StyledTopbar className="top">
      <div className="top__left">
        <FontAwesomeIcon className="top__social-icon" icon={brands('facebook')} />
        <FontAwesomeIcon className="top__social-icon" icon={brands('twitter')} />
        <FontAwesomeIcon className="top__social-icon" icon={brands('instagram')} />
      </div>

      <div className="top__center">
        <ul className="top__list">
          <li className="top__list__item"><Link to="/">Home</Link></li>
          <li className="top__list__item"><Link to="/">About</Link></li>
          <li className="top__list__item"><Link to="/">Contact</Link></li>
          <li className="top__list__item"><Link to="/write">Write</Link></li>
          { user && <li className="top__list__item">Logout</li> }
        </ul>
      </div>

      <div className="top__right">
        {user ? (
          <Link className="link" to="/settings">
            <StyledUserImage className="top__user-img" src="https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="profile" />
          </Link>
        ) : (
          <ul className="top__list">
            <li className="top__list__item"><Link className="link" to="/login">Login</Link></li>
            <li className="top__list__item"><Link className="link" to="/register">Register</Link></li>
          </ul>
        )}
        <FontAwesomeIcon className="top__search-icon" icon={solid('magnifying-glass')} />
      </div>
    </StyledTopbar>
  )
}

export default TopBar;