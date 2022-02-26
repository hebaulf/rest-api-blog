import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import { StyledSingle } from "./styles";

const Single = () => {
  return (
    <StyledSingle className="single">
      <SinglePost />
      <Sidebar />
    </StyledSingle>
  );
}

export default Single;