/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home, UserCogIcon, Clock, Clipboard, CalendarCheck, Building2, Menu, X, BriefcaseBusiness, Building, User, LogOut, LogIn, UserPlus, BadgeDollarSign, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    profilePic: "",
    role: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));

    if (storedUser) {
      setUser(storedUser);
    } else {
      setUser({
        name: "",
        profilePic: "",
        role: "",
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="sidebar bg-white dark:bg-gray-900 text-[#55679C] dark:text-white h-screen flex flex-col border-r border-gray-200 dark:border-gray-700">
      {/* Tombol Toggle Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 md:hidden z-50 absolute top-3 left-4 transition-transform duration-200 active:bg-[#55679C] active:text-white"
      >
        <Menu className="h-4 w-4 text-[#55679C] dark:text-white" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col h-full`}
      >
        <div className="flex items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold flex-grow text-[#55679C] dark:text-white ml-6">
            <Building2 className="h-6 w-6 text-[#55679C] dark:text-white" />
            <span>ASQI Payroll</span>
          </Link>
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-2 transition-transform duration-200 active:bg-[#55679C] active:text-white"
            >
              <X className="h-6 w-6 text-[#55679C] dark:text-white" />
            </button>
          )}
        </div>

        <div className="scroll-hidden flex-1 mt-6 overflow-y-auto">
          {/* User Profile */}
          {user.name ? (
            <div className="flex items-center mt-4 ml-4 mb-6">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#55679C] dark:border-white">
                <img 
                  src={user.profilePic || "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"} 
                  alt="User Profile"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-col ml-5">
                <span className="text-[#55679C] dark:text-white text-sm font-semibold">{user.name}</span>
                <span className="text-[#55679C] dark:text-white text-xs">{user.role}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center mt-4 ml-4 mb-6">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#55679C] dark:border-white">
                <img 
                  src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
                  alt="Default Profile"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-col ml-5">
                <span className="text-[#55679C] dark:text-white text-sm font-semibold">Anda belum login!</span>
              </div>
            </div>
          )}

          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pb-6">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
            >
              <Home className="h-4 w-4 text-[#55679C] dark:text-white" />
              Dashboard
            </Link>
            {user.role === "super-admin" && (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#55679C] dark:text-white transition-all hover:text-primary border-none active:bg-[#55679C] active:text-white">
                    <div className="relative flex items-center">
                      <UserCogIcon className="h-4 w-4 text-[#55679C] dark:text-white" />
                      <span className={`absolute right-0 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        <svg
                          className="h-4 w-4 text-[#55679C] dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                    Super Admin
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"></Badge>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <Link
                      to="/super-admin/crud-karyawan"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <UserPlus className="h-4 w-4" />
                      CRUD Karyawan
                    </Link>
                    <Link
                      to="/super-admin/crud-transaksi"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <BadgeDollarSign className="h-4 w-4"/>
                      CRUD Transaksi
                    </Link>
                    <Link
                      to="/super-admin/income-expense"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <LineChart className="h-4 w-4"/>
                      Income and Expense
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
            {user.role === "admin" && (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#55679C] dark:text-white transition-all hover:text-primary border-none active:bg-[#55679C] active:text-white">
                    <div className="relative flex items-center">
                      <UserCogIcon className="h-4 w-4 text-[#55679C] dark:text-white" />
                      <span className={`absolute right-0 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        <svg
                          className="h-4 w-4 text-[#55679C] dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                    Admin
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"></Badge>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <Link
                      to="/admin/create-position"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <UserPlus className="h-4 w-4" />
                      CRUD Karyawan
                    </Link>
                    <Link
                      to="/admin/create-departments"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <BadgeDollarSign className="h-4 w-4"/>
                      CRUD Transaksi
                    </Link>
                    <Link
                      to="/admin/create-employee"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <LineChart className="h-4 w-4"/>
                      Income and Expense
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
            <Link
              to="/leave-request"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
            >
              <Clipboard className="h-4 w-4 text-[#55679C] dark:text-white" />
              Leave Request
            </Link>
            <Link
              to="/attendance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
            >
              <CalendarCheck className="h-4 w-4 active:text-white text-[#55679C] dark:text-white" />
              Attendance
            </Link>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#55679C] dark:text-white transition-all hover:text-primary border-none active:bg-[#55679C] active:text-white">
                    <div className="relative flex items-center">
                      <UserCogIcon className="h-4 w-4 text-[#55679C] dark:text-white" />
                      <span className={`absolute right-0 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        <svg
                          className="h-4 w-4 text-[#55679C] dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                    Laporan
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"></Badge>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <Link
                      to="/monthly-salary"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <UserPlus className="h-4 w-4" />
                      Penggajian perbulan
                    </Link>
                    <Link
                      to="/project-bonus"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <BadgeDollarSign className="h-4 w-4"/>
                      Bonus Proyek
                    </Link>
                    <Link
                      to="/admin/create-employee"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <LineChart className="h-4 w-4"/>
                      Lembur
                    </Link>
                    {user.role === "super-admin" && (
                    <Link
                      to="/super-admin/buku-besar"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <LineChart className="h-4 w-4"/>
                      Laporan Buku Besar
                    </Link>
                    )}
                    {user.role === "super-admin" && (
                    <Link
                      to="/super-admin/expense-income"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <LineChart className="h-4 w-4"/>
                      Income & Expense
                    </Link>
                    )}
                        {user.role === "admin" && (
                    <Link
                      to="/admin/expense-income"
                      className="flex items-center gap-3 py-1 block py-1 text-[#55679C] dark:text-white transition-all hover:text-primary active:bg-[#55679C] active:text-white"
                    >
                      <LineChart className="h-4 w-4"/>
                      Income & Expense
                    </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            {user.name ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-blue-600 active:bg-[#55679C]"
                style={{ backgroundColor: '#55679C' }}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#55679C] dark:text-white transition-all hover:bg-blue-600 active:bg-[#55679C] text-white bg-blue-500 mt-4 active:scale-95 active:bg-blue-700"
              >
                <LogIn className="h-4 w-4" />
                Login
              </button>
            )}
          </nav>
        </div>
      </div>
      
      {/* Konten Overlay untuk Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black w-[70%]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
