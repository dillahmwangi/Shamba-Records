import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from '@generouted/react-router';
import './index.css';
import { Provider } from 'react-redux';


import { store } from './store';
import { AuthProvider } from './features/auth/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
   <AuthProvider>
<Routes/>
   </AuthProvider>
    </Provider>
  </React.StrictMode>
);