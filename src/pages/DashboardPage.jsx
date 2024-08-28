import { useState, useEffect } from "react";
import { Sidebar } from "./SidebarPage";
import { Header } from "./HeaderPage";
import { useLocation } from "react-router-dom";

function DashboardPage() {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const [notification, setNotification] = useState('');

    useEffect(() => {
        // Ambil data pengguna dari localStorage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        setUser(currentUser);

        if (location.state?.fromAdminRoute) {
            setNotification('Kamu bukan Admin!');
        }
    }, [location]);

    return (
        <div>
            {notification && (
                <div className="notification bg-red-500 text-white p-4 rounded-md mb-4">
                    {notification}
                </div>
            )}
            <div className="flex h-screen bg-slate-100">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <main className="flex-1 p-6">
                        {user ? (
                            user.role === "admin" ? (
                                <div>
                                    <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
                                    <p>Selamat datang, {user.name}. Anda memiliki akses penuh ke semua fitur.</p>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
                                    <p>Selamat datang, {user.name}. Anda tidak memiliki akses ke fitur Admin.</p>
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
