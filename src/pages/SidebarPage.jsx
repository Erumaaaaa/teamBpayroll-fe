import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, UserCogIcon, Clock, Clipboard, CalendarCheck, Building2, Menu, X, BriefcaseBusiness, Building, User, LogOut, LogIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // State untuk data pengguna
  const [user, setUser] = useState({
    name: "",
    profilePic: "",
    role: "",
  });

  useEffect(() => {
    // Simulasi pengambilan data pengguna dari local storage atau API
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
    // Hapus data pengguna dari local storage
    localStorage.removeItem('currentUser');
    
    // Redirect ke halaman login
    navigate('/login');
  };

  const handleLogin = () => {
    // Redirect ke halaman login
    navigate('/login');
  };

  return (
    <div className="flex bg-zinc-950">
      {/* Tombol Toggle Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 md:hidden z-50 absolute top-3 left-4"
      >
        <Menu className="h-4 w-4 text-zinc-960" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-muted/40 p-4 transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold flex-grow text-zinc-200 ml-6">
            <Building2 className="h-6 w-6 text-zinc-200" />
            <span>ASQI Payroll</span>
          </Link>
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-2"
            >
              <X className="h-6 w-6 text-zinc-200" />
            </button>
          )}
        </div>

        {/* User Profile */}
        {user.name ? (
          <div className="flex items-center mt-4 ml-4">
            <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-zinc-50">
              <img 
                src={user.profilePic || "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"} 
                alt="User Profile"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col ml-5">
              <span className="text-zinc-200 text-sm font-semibold">{user.name}</span>
              <span className="text-zinc-200 text-xs">{user.role}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center mt-4 ml-4">
            <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-zinc-50">
              <img 
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
                alt="Default Profile"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col ml-5">
              <span className="text-zinc-200 text-sm font-semibold">Anda belum login!</span>
            </div>
          </div>
        )}

        <div className="flex-1 mt-6">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-zinc-200"
            >
              <Home className="h-4 w-4 text-zinc-200" />
              Dashboard
            </Link>
            {user.role === "admin" && (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary border-none text-zinc-200">
                    <div className="relative flex items-center">
                      <UserCogIcon className="h-4 w-4 text-zinc-200" />
                      <span className={`absolute right-0 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                        <svg
                          className="h-4 w-4 text-zinc-200"
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
                      className="block py-1 transition-all hover:text-primary text-zinc-200"
                    >
                      Create Position
                    </Link>
                    <Link
                      to="/admin/create-departments"
                      className="block py-1 transition-all hover:text-primary text-zinc-200"
                    >
                      Create Department
                    </Link>
                    <Link
                      to="/admin/create-employee"
                      className="block py-1 transition-all hover:text-primary text-zinc-200"
                    >
                      Create Employee
                    </Link>
                    <Link
                      to="/admin/payroll"
                      className="block py-1 transition-all hover:text-primary text-zinc-200"
                    >
                      Payroll
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
            <Link
              to="/position"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-zinc-200"
            >
              <BriefcaseBusiness className="h-4 w-4 text-zinc-200" />
              Position
            </Link>
            <Link
              to="/departments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-zinc-200"
            >
              <Building className="h-4 w-4 text-zinc-200" />
              Department
            </Link>
            <Link
              to="/employee"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-zinc-200"
            >
              <User className="h-4 w-4 text-zinc-200" />
              Employee
            </Link>
            <Link
              to="/schedule"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-zinc-200"
            >
              <Clock className="h-4 w-4 text-zinc-200" />
              Schedule
            </Link>
            <Link
              to="/leave-request"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-zinc-200"
            >
              <Clipboard className="h-4 w-4 text-zinc-200" />
              Leave Request
            </Link>
            <Link
              to="/attendance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-zinc-200"
            >
              <CalendarCheck className="h-4 w-4 text-zinc-200" />
              Attendance
            </Link>
            {user.name ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-red-600 text-white bg-red-500 mt-4"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-blue-600 text-white bg-blue-500 mt-4"
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
          className="fixed inset-0 z-30 md:hidden bg-black w-2/3"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
