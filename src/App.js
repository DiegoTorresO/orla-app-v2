import './App.css';
import BasicCard from './components/card';
import Footer from './components/footer';
import ResponsiveAppBar from './components/navbar';
function App() {
  
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
      <BasicCard/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
