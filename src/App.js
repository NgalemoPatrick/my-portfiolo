
import './App.css';
import Cdtsm from './components/Cdtsm';
import Header from './components/Header';
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom'
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';



function App() {
  return (
    <div className="App">
      <main>
        <div className="glass">
        <NavBar />
          <Header />
          <Cdtsm />
          
          <hr />
          <Routes>
              <Route path='/' element={< AboutMe />} />
              <Route path='/PROJECTS' element={< Projects />} />
              <Route path='/CONTACT' element={< Contact />} />
          </Routes>
          
        </div>
      </main>
    </div>
  );
}

export default App;
