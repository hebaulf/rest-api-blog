import { StyledSettings } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import Sidebar from "../../components/Sidebar/Sidebar";

const Settings = () => {
  return (
    <StyledSettings className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__title-update">Update Your Account</span>
          <span className="settings__title-delete">Delete Account</span>
        </div>

        <form className="settings__form">
          <label>Profile Picture</label>
          
          <div className="settings__pp">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <FontAwesomeIcon className="settings__pp__icon" icon={regular('circle-user')} />{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settings__pp__input"
            />
          </div>

          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />

          <button className="settings__submit-btn" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </StyledSettings>
  );
}

export default Settings;