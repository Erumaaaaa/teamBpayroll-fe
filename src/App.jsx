/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './private-route/ProtectedRoute';
import SuperAdminRoute from './private-route/SuperAdminRoute';
import AdminRoute from './private-route/AdminRoute';
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import DashboardPage from './pages/DashboardPage';
import CrudKaryawan from './Admin/crud-karyawan';
import CrudTransaksi from './Admin/crud-transaksi';
import IncomeExpense from './Admin/income-expense';
import BukuBesar from './Super-Admin/buku-besar';
import AttendanceHistory from './User/Attendance/AttendanceHistory';
import ProjectBonus from './User/ProjectBonusReport';
import MonthlySalary from './User/ReportMonthlySalary';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={DashboardPage} />} />
          <Route path="/dashboard" element={<ProtectedRoute element={DashboardPage} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/attendance" element={<ProtectedRoute element={AttendanceHistory} />} />
          <Route path="/project-bonus" element={<ProtectedRoute element={ProjectBonus} />} />
          <Route path="/monthly-salary" element={<ProtectedRoute element={MonthlySalary} />} />
          <Route
            path="/admin/crud-karyawan"
            element={<AdminRoute element={CrudKaryawan} />}
          />
          <Route
            path="/admin/crud-transaksi"
            element={<AdminRoute element={CrudTransaksi} />}
          />
          <Route
            path="/admin/income-expense"
            element={<AdminRoute element={IncomeExpense} />}
          />

          <Route
            path="/super-admin/crud-karyawan"
            element={<SuperAdminRoute element={CrudKaryawan} />}
          />
          <Route
            path="/super-admin/crud-transaksi"
            element={<SuperAdminRoute element={CrudTransaksi} />}
          />
          <Route
            path="/super-admin/income-expense"
            element={<SuperAdminRoute element={IncomeExpense} />}
          />
          <Route
            path="/super-admin/buku-besar"
            element={<SuperAdminRoute element={BukuBesar} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
