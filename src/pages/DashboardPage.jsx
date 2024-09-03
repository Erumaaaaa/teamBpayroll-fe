import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useLocation } from "react-router-dom";
import UserDashboard from "../Dashboard/user-dashboard";

function DashboardPage() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Retrieve user data from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUser(currentUser);

    if (location.state?.fromSuperAdminRoute) {
      setNotification('Kamu Bukan Super Admin!')
    }

    if (location.state?.fromAdminRoute) {
      setNotification('Kamu bukan Admin!');
    }
  }, [location]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-[#55679C] dark:text-white">
      {notification && (
        <div className="notification bg-red-500 text-white p-4 rounded-md mb-4">
          {notification}
        </div>
      )}
      <div className="flex h-screen bg-white dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-900">
          <Header />
          <main className="flex-1 p-6 bg-white dark:bg-gray-900">
            {user ? (
              user.role === "super-admin" ? (
                <div>
                  <UserDashboard/>
                </div>
              ) : user.role === "admin" ? (
                <div>
                  <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
                  <p>Selamat datang, {user.name}. Anda memiliki akses penuh ke semua fitur.</p>
                </div>
              ) : (
                <div>
                  <UserDashboard/>
                </div>
              )
            ) : (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
