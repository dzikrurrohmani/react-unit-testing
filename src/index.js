import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import apiClientFactory from './shared/api/ApiClientFactory';
import axiosClient from './shared/api/AxiosClient';
import serviceFactory from './services/ServiceFactory';
import { DependencyProvider } from './shared/context/DependencyContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const apiClient = apiClientFactory(axiosClient);
const services = serviceFactory(apiClient);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DependencyProvider services={services}>
        <App />
      </DependencyProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
