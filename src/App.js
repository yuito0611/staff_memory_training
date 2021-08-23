import logo from './logo.svg';
import './App.css';

import Main from  './components/Main.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>記憶トレーニング</p>
      </header>
        <Main />

    </div>
  );
}

export default App;
