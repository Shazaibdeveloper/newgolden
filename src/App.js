import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Team from './components/team/Team'
import Features from './components/features/Features';
import Explore from './pages/Explore';
import { BrowserRouter } from 'react-router-dom';
import Detail from './pages/Detail';
import Container from './components/ObjConatner';
import Projects from './pages/Projects';
import Writing from './pages/Writing';
import Blog from './pages/Blog';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/detail/:TokenId" element={<Detail />} />
      <Route path="/obj" element={<Container link2="//gateway.pinata.cloud/ipfs/QmPhSriY3UkJDALHMSwx1mJe6pbDNJpWFqZo5hHWPSrZaf"/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
