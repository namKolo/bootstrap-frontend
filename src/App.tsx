import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import { IApplicationState } from 'store';

import Routes from './routes';
import './App.css';

interface Props {
  store: Store<IApplicationState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
};

export default App;
