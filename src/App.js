import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoList from './components/TodoList'
import todoReducer from './reducers/todoReducer'

function App() {
  const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
