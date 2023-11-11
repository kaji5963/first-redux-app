import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // extension追加
);

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
    </div>
  );
}

export default App;
