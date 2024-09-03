/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const employeeData = [
  { id: 1, nama: 'John Doe', jabatan: 'Manager', department: 'Sales', scorePerforma: 85 },
  { id: 2, nama: 'Jane Smith', jabatan: 'Developer', department: 'IT', scorePerforma: 92 },
  { id: 3, nama: 'Mike Johnson', jabatan: 'Designer', department: 'Marketing', scorePerforma: 78 },
  { id: 4, nama: 'Sarah Brown', jabatan: 'HR Specialist', department: 'Human Resources', scorePerforma: 88 },
  { id: 5, nama: 'Tom Wilson', jabatan: 'Accountant', department: 'Finance', scorePerforma: 95 },
];

const jabatanDistribution = [
  { jabatan: 'Manager', count: 5 },
  { jabatan: 'Developer', count: 12 },
  { jabatan: 'Designer', count: 8 },
  { jabatan: 'HR Specialist', count: 3 },
  { jabatan: 'Accountant', count: 6 },
];

const payrollData = [
  { month: 'January', payroll: 50000, bonus: 5000, lembur: 3000 },
  { month: 'February', payroll: 52000, bonus: 4500, lembur: 2800 },
  { month: 'March', payroll: 51000, bonus: 4800, lembur: 3200 },
  { month: 'April', payroll: 53000, bonus: 5200, lembur: 3500 },
  { month: 'May', payroll: 54000, bonus: 5300, lembur: 3400 },
  { month: 'June', payroll: 55000, bonus: 5500, lembur: 3600 },
  // Add more monthly data as needed
];

const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Employee jabatans Dashboard</h1>

      <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Payroll Reports</Tab>
          <Tab>Project bonus</Tab>
          <Tab>lembur Reports</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Employees</CardTitle>
                <CardDescription>Current workforce size</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{employeeData.length}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Departments</CardTitle>
                <CardDescription>Active departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(employeeData.map(emp => emp.department))).map(dept => (
                    <Badge key={dept} variant="secondary">{dept}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Average Performance</CardTitle>
                <CardDescription>Team overall score</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">
                  {(employeeData.reduce((acc, emp) => acc + emp.scorePerforma, 0) / employeeData.length).toFixed(1)}%
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Employee List</CardTitle>
                <CardDescription>Quick overview of team members</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>nama</TableHead>
                      <TableHead>jabatan</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeData.map(employee => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={`/api/placeholder/32/32`} alt={employee.nama} />
                              <AvatarFallback>{employee.nama.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span>{employee.nama}</span>
                          </div>
                        </TableCell>
                        <TableCell>{employee.jabatan}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>
                          <Badge variant={employee.scorePerforma >= 90 ? "success" : employee.scorePerforma >= 70 ? "warning" : "destructive"}>
                            {employee.scorePerforma}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>jabatan Distribution</CardTitle>
                <CardDescription>Breakdown of employee jabatans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={jabatanDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="jabatan" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabPanel>

        <TabPanel>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Payroll</CardTitle>
              <CardDescription>Overview of monthly payroll, bonus, and lembur</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={payrollData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="payroll" stroke="#8884d8" />
                    <Line type="monotone" dataKey="bonus" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="lembur" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabPanel>

        <TabPanel>
          <Card>
            <CardHeader>
              <CardTitle>Project bonus</CardTitle>
              <CardDescription>Report on project-related bonus</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Implement detailed project bonus data and charts here...</p>
            </CardContent>
          </Card>
        </TabPanel>

        <TabPanel>
          <Card>
            <CardHeader>
              <CardTitle>lembur Reports</CardTitle>
              <CardDescription>Report on lembur hours and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Implement detailed lembur data and charts here...</p>
            </CardContent>
          </Card>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default UserDashboard;
