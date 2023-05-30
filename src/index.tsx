import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from 'react-redux';
import store from "../src/components/store";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './index.css';
import App from './App';
import NavbarNavigation from './Navbar/NavbarNavigatio';
import Footer from './Footer/Footer';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavbarNavigation />
          <Routes />
          <Footer />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);