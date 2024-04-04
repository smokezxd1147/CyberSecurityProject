import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import './index.css';
import App from './App';

import { MembersProvider } from './contexts/MembersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MembersProvider>
      <App />
    </MembersProvider>
  </React.StrictMode>
);
