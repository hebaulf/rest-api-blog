import { StyledWrite } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Write = () => {
  return (
    <StyledWrite className="write">
      <img
        className="write__img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="write__form">
        <div className="write__form-group">
          <label htmlFor="fileInput">
            <FontAwesomeIcon className="write__icon" icon={solid('plus')} />
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="write__input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="write__form-group">
          <textarea
            className="write__input writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
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