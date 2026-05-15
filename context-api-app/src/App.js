import logo from './logo.svg';
import './App.css';
import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';
import { ThemeProvider } from './context/ThemeProvider';
import ContentComponent from './components/ContentComponent';

function App() {
  const userInfo = {
    username: "Admin",
    isAdmin: "true",
  };
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <UserInfoContext.Provider value={userInfo}>
        <h1>Welcome to the User Info App</h1>
        <BlogPage />
      </UserInfoContext.Provider>

      <hr/>

      <ThemeProvider>
        <ContentComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
