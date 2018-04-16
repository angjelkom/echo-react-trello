import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Provider } from 'react-redux';
import reducer from './reducer';
import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Board from './containers/Board';
import TopBar from './containers/TopBar';
import './index.css';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store);
ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <Router>
        <>
          <TopBar />
          <Switch style={{ background: 'red', marginTop: '199px' }}>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Board} />
            <Route path="/board/:id" component={Board} />
          </Switch>
        </>
      </Router>
    </Provider>
  </PersistGate>,
  document.getElementById('root'));
registerServiceWorker();
