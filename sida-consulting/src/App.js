import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { NavBar } from './Component/NavBar';
import { Banner } from './Component/Banner';
import { About } from './Component/About';
import { Service } from './Component/Services';
import { Associates } from './Component/Associates';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Service />
      <Associates />
    </div>
  );
}

export default App;
