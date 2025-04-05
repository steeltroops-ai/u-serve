
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
  User,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

const ProviderLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  const navItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5 mr-3" />,
      path: "/provider/dashboard"
    },
    {
      title: "Services",
      icon: <ClipboardList className="w-5 h-5 mr-3" />,
      path: "/provider/services"
    },
    {
      title: "Bookings",
      icon: <Calendar className="w-5 h-5 mr-3" />,
      path: "/provider/bookings"
    },
    {
      title: "Messages",
      icon: <MessageSquare className="w-5 h-5 mr-3" />,
      path: "/provider/messages"
    },
    {
      title: "Earnings",
      icon: <CreditCard className="w-5 h-5 mr-3" />,
      path: "/provider/earnings"
    },
    {
      title: "Profile",
      icon: <User className="w-5 h-5 mr-3" />,
      path: "/provider/profile"
    },
    {
      title: "Settings",
      icon: <Settings className="w-5 h-5 mr-3" />,
      path: "/provider/settings"
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-card border-r border-border/30 shadow-sm">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback className="bg-primary/10 text-primary">SP</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-foreground">Service Provider</h3>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
        </div>
        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-accent hover:text-accent-foreground"
                )
              }
            >
              {item.icon}
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="p-4 border-t border-border/30">
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log out
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-card border-t border-border/30 md:hidden">
        <div className="flex justify-around">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center py-2 px-1 text-xs",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                )
              }
            >
              {React.cloneElement(item.icon, { className: "w-5 h-5 mb-1" })}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProviderLayout;
