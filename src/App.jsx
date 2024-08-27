/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Route path='/' element={<DashboardPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/position' element={<Position />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/employee' element={<Employees />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/leave-request' element={<LeaveRequest />} />
        <Route path='/admin/create-departments' element={<CreateDepartment />} />
        <Route path='/admin/create-position' element={<CreatePosition />} />
        <Route path='/admin/create-employee' element={<CreateEmployee />} />
        <Route path='/admin/payroll' element={<Payroll />} />
      </Routes>
    </Router>
  );
}

export default App;
