
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, 
  User, 
  Mail, 
  Calendar, 
  LogOut, 
  Settings, 
  Bell, 
  Activity,
  CheckCircle,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [notifications] = useState([
    { id: 1, message: "Welcome to your secure dashboard!", time: "Just now", read: false },
    { id: 2, message: "Your account is fully verified", time: "2 min ago", read: true },
    { id: 3, message: "Security settings updated", time: "1 hour ago", read: true },
  ]);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold text-white">SecureAuth</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Settings className="h-5 w-5" />
              </Button>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-300">
            Here's what's happening with your account today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-20 w-20 bg-emerald-500">
                    <AvatarFallback className="text-white text-xl font-bold bg-emerald-500">
                      {user ? getInitials(user.name) : 'U'}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-white">{user?.name}</CardTitle>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  Verified User
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{user?.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    Joined {user ? formatDate(user.createdAt) : ''}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <User className="h-4 w-4" />
                  <span className="text-sm">ID: {user?.id}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Login Sessions</p>
                      <p className="text-2xl font-bold text-white">1</p>
                    </div>
                    <Activity className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Account Status</p>
                      <p className="text-2xl font-bold text-emerald-400">Active</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-emerald-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Last Login</p>
                      <p className="text-2xl font-bold text-white">Now</p>
                    </div>
                    <Clock className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className={`h-2 w-2 rounded-full mt-2 ${notification.read ? 'bg-gray-400' : 'bg-emerald-400'}`} />
                      <div className="flex-1">
                        <p className="text-white text-sm">{notification.message}</p>
                        <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <h3 className="text-emerald-400 font-semibold mb-2">✓ Secure Session</h3>
                    <p className="text-gray-300 text-sm">Your session is encrypted and secure</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <h3 className="text-blue-400 font-semibold mb-2">✓ Protected Routes</h3>
                    <p className="text-gray-300 text-sm">Access to authenticated areas only</p>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <h3 className="text-purple-400 font-semibold mb-2">✓ Data Validation</h3>
                    <p className="text-gray-300 text-sm">Form inputs are validated and sanitized</p>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <h3 className="text-orange-400 font-semibold mb-2">✓ Session Management</h3>
                    <p className="text-gray-300 text-sm">Automatic session handling and cleanup</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
