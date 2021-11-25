import './App.css';
import Banner from './component/Banner.tsx';
import Card from './component/Card.tsx';
import Contain from './component/Contain.tsx';
import Footer from './component/Footer.tsx';

function App() {
  return (
    <div className="App">
        <Banner/>
            <Contain/>
            <Contain/>
        <Footer/>
    </div>
  );
}

export default App;
