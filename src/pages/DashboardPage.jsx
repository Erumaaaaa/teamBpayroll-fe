import { useState, useEffect } from "react";
import { Sidebar } from "./SidebarPage";
import { Header } from "./HeaderPage";

function DashboardPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Ambil data pengguna dari localStorage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        setUser(currentUser);
    }, []);

    return (
        <div className="flex h-screen bg-slate-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-6">
                    {user ? (
                        user.role === "admin" ? (
                            <div>
                                <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
                                {/* Konten khusus Admin */}
                                <p>Selamat datang, {user.name}. Anda memiliki akses penuh ke semua fitur.</p>
                                {/* Tambahkan konten admin di sini */}
                            </div>
                        ) : (
                            <div>
                                <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
                                {/* Konten khusus User */}
                                <p>Selamat datang, {user.name}. Anda tidak memiliki akses ke fitur Admin.</p>
                                {/* Tambahkan konten user di sini */}
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
    );
}

export default DashboardPage;
