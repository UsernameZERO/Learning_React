import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Zero";
  const isloggedIn = false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isloggedIn && <p> Hello World <br/> {new Date().toDateString()}
        </p>}
        {isloggedIn && <p> Hello {name} <br/> {new Date().toDateString()}
        </p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
