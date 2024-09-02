/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleUser, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Toast } from "@/components/ui/toast"; // Assuming you have a Toast component for notifications
import { Sidebar } from "./sidebar/SidebarPage";
import { ModeToggle } from "../components/mode-toggle"; // Import ModeToggle

export function Header() {
  const [user, setUser] = useState({ name: "", role: "" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
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
    localStorage.removeItem("user");
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      

      {/* Sidebar Component */}
      {isSidebarOpen && <Sidebar />}

      <header className="flex items-center justify-between h-14 gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 dark:bg-gray-800 bg-white dark:bg-gray-900 text-[#55679C] dark:text-white">
        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="ml-7 dark:text-gray-300" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="dark:text-gray-500" />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 dark:text-gray-300">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {user.role === "admin" ? (
                    <>
                      <DropdownMenuItem onClick={handleAdminClick}>
                        Position
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleAdminClick}>
                        Department
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleAdminClick}>
                        Employee
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <DropdownMenuItem onClick={handleAdminClick}>
                      Admin
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="dark:text-gray-500" />
            <BreadcrumbItem>
              <BreadcrumbLink className="dark:text-gray-300" href="/position/create-position">
                Create Position
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="dark:text-gray-500" />
          </BreadcrumbList>
        </Breadcrumb>

        {/* Flex container for ModeToggle and User Menu */}
        <div className="flex items-center gap-4">
          {/* Mode Toggle Button */}
          <ModeToggle />

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-gray-800">
              <DropdownMenuLabel className="dark:text-gray-300">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="dark:bg-gray-700" />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator className="dark:bg-gray-700" />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}
