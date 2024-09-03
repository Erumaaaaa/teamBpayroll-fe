/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!storedUser || storedUser.role !== 'admin') {
      // Jika pengguna tidak berperan sebagai admin, redirect ke dashboard user
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div>
        {/* Konten halaman admin */}
    </div>
  );
};

export default AdminPage;
