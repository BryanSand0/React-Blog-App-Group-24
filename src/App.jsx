import { Routes, Route } from 'react-router';
import './App.css'
import IndiviualBlogPost from './Components/Blog/Post/IndiviualBlogPost';
import ContactPage from './Components/Contact/ContactPage';
import PostList from './Components/Blog/Post/PostList';
import CommonLayout from './Components/Main/CommonLayout';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';

function App() {

  return (
    <div class='Main'>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:post_id" element={<IndiviualBlogPost />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;