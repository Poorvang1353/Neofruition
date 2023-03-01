import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
function App() {
  return (
    <>
      <Navbar title="NFT Tech" />
      <div className="container">
        <TextArea/>
      </div>
    </>
  );
}

export default App;
