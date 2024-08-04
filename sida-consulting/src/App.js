import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Component/NavBar';
import { Banner } from './Component/Banner';
import { About } from './Component/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
