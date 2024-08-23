/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './pages/Sidebar/SidebarPage';
import { Header } from './pages/HeaderPage';
function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-100">
        <Sidebar/>
        <div className="flex-1 flex flex-col z-20">
          <Header />
          <main className="flex-1 p-6">
            <Routes>
              {/* <Route path="/" element={<ImportKomponen />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
