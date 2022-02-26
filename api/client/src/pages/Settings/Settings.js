import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import { StyledSettings } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { axiosInstance } from '../../config';
import Sidebar from '../../components/Sidebar/Sidebar';

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "https://restapimern-blog.herokuapp.com/images/";
  
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
    
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }

    try {
      const res = await axiosInstance.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <StyledSettings className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__title-update">Update Your Account</span>
          <span className="settings__title-delete">Delete Account</span>
        </div>

        <form className="settings__form" autoComplete="off" onSubmit={handleSubmit}>

          <label>Profile Picture</label>
          
          <div className="settings__pp">
            {user.profilePic 
              ? (
                <img
                  src={file ? URL.createObjectURL(file) : publicFolder + user.profilePic}
                  alt="Profile picture. Click on file input to edit"
                />
              )
              : (
                <img
                  src={file ? URL.createObjectURL(file) : publicFolder + 'no-avatar.png'}
                  alt="Profile picture. Click on file input to edit"
                />
              )
            }
            
            <label htmlFor="fileInput">
              <FontAwesomeIcon className="settings__pp__icon" icon={regular('circle-user')} />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settings__pp__input"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <label>Username</label>
          <input 
            type="text" 
            placeholder={user.username} 
            name="name" 
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)} 
          />

          <label>Email</label>
          <input 
            type="email" 
            placeholder={user.email} 
            name="email" 
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="settings__submit-btn" type="submit" >Update</button>
          {success && <span className="msg__success">Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar />
    </StyledSettings>
  );
}

export default Settings;