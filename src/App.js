import logo from './logo.svg';
import './App.css';
import './style/NavBar.css';
import './style/Header.css';
import './style/Banner.css';
import './style/About.css';
import './style/Services.css';
import './style/Associates.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Component/NavBar';
import { Banner } from './Component/Banner';
import { About } from './Component/About';
import { Service } from './Component/Services';
import { Associates } from './Component/Associates';
import { Contact } from './Component/Contact';
import { Header } from './Component/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Service />
      <Associates />
      <Contact />
    </div>
  );
}

export default App;
