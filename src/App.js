import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoList from './components/TodoList'
import todoReducer from './reducers/todoReducer'
import {Switch, Route, Link} from "react-router-dom";
import HelpPage from './components/HelpPage'
import DonePage from './components/DonePage';

function App() {
  const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return (
    <div className="App">
      <Provider store={store}>
        <Link to="/" className="App-link">Home</Link>|
        <Link to="/done" className="App-link">Done</Link>|
        <Link to="/help" className="App-link">Help</Link>
        <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route exact path="/done" component={DonePage}/>
          <Route exact path="/help" component={HelpPage}/>
        </Switch>  
      </Provider>
    </div>
  );
}

export default App;
