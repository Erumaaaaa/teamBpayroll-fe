/* eslint-disable no-unused-vars */
import React from 'react';
import { Header } from './HeaderPage';
import { Sidebar } from './sidebar/SidebarPage';

const Employees = () => {
  return (
    <div className="flex bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-4">Employees</h1>
          <p className="text-lg mb-6">Halaman untuk melihat dan mengelola karyawan.</p>
          {/* Konten tambahan bisa ditambahkan di sini */}
        </main>
      </div>
    </div>
  );
};

export default Employees;
