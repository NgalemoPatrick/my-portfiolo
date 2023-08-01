
import './App.css';
import Cdtsm from './components/Cdtsm';
import Header from './components/Header';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <main>
        <div className="glass">
          <Header />
          <Cdtsm />
          <NavBar />
          <h1>Welcome to My Portofiolo...</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
