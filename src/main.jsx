import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Pastikan CSS Anda diimport dengan benar
import { ThemeProvider } from './components/ThemeProvider'; // Impor ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> {/* Bungkus App dengan ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
