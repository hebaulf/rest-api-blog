import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { Context } from "./context/Context";
import GlobalStyles from "./styles/Global";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

const theme = {
  colors: {
    topbar: '#72dddf',
    body: '#fff',
    footer: '#ccc',
    titles: '#37392e'
  }
}

function App() {
  const { user } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
