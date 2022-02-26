import { StyledWrite } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
    
      try {
        await axiosInstance.post('/upload', data);
      } catch (err) {}
    }

    try {
      const res = await axiosInstance.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id)
    } catch (err) {}
  };

  return (
    <StyledWrite className="write">
      {file && (
        <img className="write__img" src={URL.createObjectURL(file)} alt="" />
      )}
      
      <form className="write__form" onSubmit={handleSubmit}>
        <div className="write__form-group">
          <label htmlFor="fileInput">
            <FontAwesomeIcon className="write__icon" icon={solid('plus')} />
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          <input
            className="write__input"
            placeholder="Title"
            type="text"
            autoFocus={true} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write__form-group">
          <textarea
            className="write__input writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="write__submit" type="submit">
          Publish
        </button>
      </form>
    </StyledWrite>
  );
}

export default Write;