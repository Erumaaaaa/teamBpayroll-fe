/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Toast } from "@/components/ui/toast"; // Assuming you have a Toast component for notifications
import { Sidebar } from "./SidebarPage";

export function Header() {
  const [user, setUser] = useState({ name: "", role: "" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleAdminClick = (event) => {
    if (user.role !== "admin") {
      event.preventDefault();
      Toast.show("Access Denied: Admin privileges required"); // Adjust to your notification library's API
      navigate("/"); // Redirect to dashboard or another page
    }
  };

  const handleLogout = () => {
    // Clear user data from localStorage or handle logout logic
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      {/* <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-2 md:hidden absolute top-4 left-4 z-50"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6 text-zinc-200" />
        ) : (
          <Menu className="h-6 w-6 text-zinc-200" />
        )}
      </button> */}

      {/* Sidebar Component */}
      {isSidebarOpen && <Sidebar />}

      <header className="flex items-center justify-between h-14 gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className='ml-7' href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {user.role === "admin" ? (
                    <>
                      <DropdownMenuItem onClick={handleAdminClick}>Position</DropdownMenuItem>
                      <DropdownMenuItem onClick={handleAdminClick}>Department</DropdownMenuItem>
                      <DropdownMenuItem onClick={handleAdminClick}>Employee</DropdownMenuItem>
                    </>
                  ) : (
                    <DropdownMenuItem onClick={handleAdminClick}>Admin (Restricted)</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/position/create-position">Create Position</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>

        {/* Search Input */}
        {/* <div className="hidden md:flex flex-1">
          <form className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-full appearance-none bg-background pl-8 shadow-none" />
          </form>
        </div> */}

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          {/* <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent> */}
        </DropdownMenu>
      </header>
    </>
  );
}
