import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Carousel from './components/Carousel';
import News from './components/News';
import Api from './components/Api';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="NFT Tech" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Carousel />}></Route>
            <Route path="about" element={<TextArea />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="api" element={<Api />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
