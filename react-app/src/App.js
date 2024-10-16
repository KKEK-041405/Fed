import logo from './logo.svg';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>KKEK</code>
        </p>
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
function Header() {
  return <Header><div>hello</div></Header>
}
export default App;
