// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import UsersDashboard from './UsersDashboard'; // Import your UsersDashboard component

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersDashboard />
      </div>
    </Provider>
  );
};

export default App;
