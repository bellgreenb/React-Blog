import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import {useEffect} from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import {useStoreActions} from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
   const { data, fetchError, isLoading } = useAxiosFetch('https://react-blog-api.onrender.com/posts');
    useEffect(() => {
        setPosts(data);
    }, [data, setPosts])

  
  return (
    <div className="App">
        <Header title="Blog about React JS" />
        <Nav />
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} fetchError={fetchError} />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
