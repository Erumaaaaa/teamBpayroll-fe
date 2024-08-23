/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Home, UserCogIcon, Clock, Clipboard, CalendarCheck, Building2, Menu, X, Search, CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function Header() {
  return (
    <header className="flex items-center justify-between h-14 gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="md:hidden">
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-zinc-950 text-zinc-50">
          <nav className="grid gap-2 text-lg font-medium">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <Building2 className="h-6 w-6" />
              <span className="sr-only">ASQI Payroll</span>
            </Link>
            <Link to="/" className="flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground">
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link to="#" className="flex items-center gap-4 rounded-xl bg-muted px-3 py-2 hover:text-foreground">
              <UserCogIcon className="h-5 w-5" />
              Admin
              <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full">6</Badge>
            </Link>
            <Link to="#" className="flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground">
              <Clock className="h-5 w-5" />
              Schedule
            </Link>
            <Link to="#" className="flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground">
              <Clipboard className="h-5 w-5" />
              Leave Request
            </Link>
            <Link to="#" className="flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground">
              <CalendarCheck className="h-5 w-5" />
              Attendance
            </Link>
          </nav>
          <div className="mt-auto">
          </div>
        </SheetContent>
      </Sheet>

      {/* Breadcrumbs */}
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Position</DropdownMenuItem>
              <DropdownMenuItem>Department</DropdownMenuItem>
              <DropdownMenuItem>Employee</DropdownMenuItem>
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

      {/* Search Input
      <div className="hidden md:flex flex-1">
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
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
