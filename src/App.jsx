import { Routes, Route } from 'react-router';
import './App.css'
import IndiviualBlogPost from './Components/Blog/Post/IndiviualBlogPost';
import ContactPage from './Components/Contact/ContactPage';
import PostList from './Components/Blog/Post/PostList';
import CommonLayout from './Components/Main/CommonLayout';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import AccountContextProvider from './Context/AccountContextProvider';


function App() {
  return (
    <div className='Main'>
      <AccountContextProvider>
        <Routes>
          <Route element={<CommonLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:post_id" element={<IndiviualBlogPost />} />
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </AccountContextProvider>
    </div>
  );
}


export default App;