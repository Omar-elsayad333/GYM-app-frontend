import logo from './logo.svg';
import './App.css';
import useTestBack from './container/useTestBack';

function App() {

  const { data } = useTestBack()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          omar elsayad
        </p>
        {
          data.length > 0 &&
          data.map((item) => (
            <p key={item._id}>{item.title}</p>
          ))
        }
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
