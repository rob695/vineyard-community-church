import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User } from "lucide-react";

export default function AdminAuthButton() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const currentUser = await base44.auth.me();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    base44.auth.redirectToLogin(window.location.pathname);
  };

  const handleLogout = () => {
    base44.auth.logout();
  };

  if (loading) return null;

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <User className="w-4 h-4" />
          <span className="hidden xl:inline">{user.full_name}</span>
          {user.role === "admin" &&
          <span className="bg-[#d4a853] text-white text-xs px-2 py-1 rounded">Admin</span>
          }
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm" className="bg-background px-3 text-xs font-medium opacity-25 rounded-md inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-8 gap-2">


          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>);

  }

  return (
    <Button
      onClick={handleLogin}
      variant="outline"
      size="sm" className="bg-background px-3 text-xs font-medium opacity-30 rounded-md inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-8 gap-2">


      <LogIn className="w-4 h-4" />
      Admin Login
    </Button>);

}