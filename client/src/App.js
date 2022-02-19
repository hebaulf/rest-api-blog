import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
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
    body: 'white',
    footer: 'gray',
    titles: '#37392e'
  }
}

function App() {
  const currentUser = false;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/register" element={currentUser ? <Home /> : <Register />} />
          <Route path="/login" element={currentUser ? <Home /> : <Login />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={currentUser ? <Write /> : <Login />} />
          <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
