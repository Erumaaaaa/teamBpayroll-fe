/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './private-route/ProtectedRoute';
import AdminRoute from './private-route/AdminRoute';
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import DashboardPage from './pages/DashboardPage';
import Position from './pages/PositionPage';
import Departments from './pages/DepartmentPage';
import Employees from './pages/EmployeePage';
import Attendance from './pages/AttendancePage';
import Schedule from './pages/SchedulePage';
import LeaveRequest from './pages/LeaveRequest';
import CreateDepartment from './pages/Admin/CreateDepartmentPage';
import CreatePosition from './pages/Admin/CreatePositionPage';
import CreateEmployee from './pages/Admin/CreateEmployeePage';
import Payroll from './pages/Admin/PayrollPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={DashboardPage} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={DashboardPage} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/position" element={<ProtectedRoute element={Position} />} />
        <Route path="/departments" element={<ProtectedRoute element={Departments} />} />
        <Route path="/employee" element={<ProtectedRoute element={Employees} />} />
        <Route path="/attendance" element={<ProtectedRoute element={Attendance} />} />
        <Route path="/schedule" element={<ProtectedRoute element={Schedule} />} />
        <Route path="/leave-request" element={<ProtectedRoute element={LeaveRequest} />} />

        <Route
          path="/admin/create-departments"
          element={<AdminRoute element={CreateDepartment} />}
        />
        <Route
          path="/admin/create-position"
          element={<AdminRoute element={CreatePosition} />}
        />
        <Route
          path="/admin/create-employee"
          element={<AdminRoute element={CreateEmployee} />}
        />
        <Route
          path="/admin/payroll"
          element={<AdminRoute element={Payroll} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
