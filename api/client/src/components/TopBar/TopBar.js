import { Link } from "react-router-dom";
import { StyledTopbar, StyledUserImage } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useContext } from "react";
import { Context } from "../../context/Context";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "https://restapimern-blog.herokuapp.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

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
          { user && <li className="top__list__item" onClick={handleLogout}>Logout</li> }
        </ul>
      </div>

      <div className="top__right">
        {user ? (
          <Link to="/settings">
            <StyledUserImage 
              className="top__user-img" 
              src={user.profilePic ? (publicFolder + user.profilePic) : (publicFolder + 'no-avatar.png')}
              alt="profile picture" 
            />
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