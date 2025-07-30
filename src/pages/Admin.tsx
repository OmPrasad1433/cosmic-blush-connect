import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, Heart, DollarSign, AlertTriangle, Crown, 
  Settings, BarChart3, MessageSquare, Video, Ban 
} from "lucide-react";
import { adminStats, demoUsers } from "@/data/demoData";
import { Link } from "react-router-dom";

const Admin = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleBanUser = (userId: string) => {
    // Demo ban functionality
    alert(`User ${userId} has been banned`);
  };

  const handleUnbanUser = (userId: string) => {
    // Demo unban functionality  
    alert(`User ${userId} has been unbanned`);
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-salmon-pink/20 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center animate-romantic-glow overflow-hidden">
              <img 
                src="/lovable-uploads/f6f77930-ba48-4dbf-bc97-5fb28b43607b.png" 
                alt="Nawa Napam Logo" 
                className="w-full h-full object-cover filter hue-rotate-[300deg] saturate-150 brightness-110"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold font-playfair bg-gradient-romantic bg-clip-text text-transparent">
                Nawa Napam Admin
              </h1>
              <p className="text-sm text-muted-foreground font-inter">Dashboard & Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                Back to App
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground font-inter">Total Users</p>
                  <p className="text-2xl font-bold font-playfair">{adminStats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground font-inter">Active Users</p>
                  <p className="text-2xl font-bold font-playfair">{adminStats.activeUsers.toLocaleString()}</p>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground font-inter">Total Matches</p>
                  <p className="text-2xl font-bold font-playfair">{adminStats.totalMatches.toLocaleString()}</p>
                </div>
                <Heart className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground font-inter">Revenue</p>
                  <p className="text-2xl font-bold font-playfair">${adminStats.revenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="users" className="font-inter">
              <Users className="w-4 h-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="matches" className="font-inter">
              <Heart className="w-4 h-4 mr-2" />
              Matches
            </TabsTrigger>
            <TabsTrigger value="reports" className="font-inter">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Reports ({adminStats.reportedUsers})
            </TabsTrigger>
            <TabsTrigger value="analytics" className="font-inter">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="font-inter">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">User Management</CardTitle>
                <CardDescription className="font-inter">
                  Manage and moderate user accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {demoUsers.map((user) => (
                    <div key={user.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <Avatar>
                        <AvatarImage src={user.images[0]} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold font-playfair">{user.name}</h3>
                          {user.verified && (
                            <Badge variant="secondary" className="bg-accent/20 text-accent">
                              Verified
                            </Badge>
                          )}
                          {user.isOnline ? (
                            <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                              Online
                            </Badge>
                          ) : (
                            <Badge variant="outline">Offline</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-inter">
                          {user.age} years old • {user.location}
                        </p>
                        <p className="text-sm text-muted-foreground font-inter mt-1">
                          {user.bio.substring(0, 60)}...
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleBanUser(user.id)}
                        >
                          <Ban className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">Match Analytics</CardTitle>
                <CardDescription className="font-inter">
                  Monitor matching activity and success rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold font-playfair text-accent">6,892</p>
                    <p className="text-sm text-muted-foreground font-inter">Total Matches</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold font-playfair text-accent">1,234</p>
                    <p className="text-sm text-muted-foreground font-inter">This Week</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold font-playfair text-accent">89%</p>
                    <p className="text-sm text-muted-foreground font-inter">Success Rate</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold font-playfair">Recent Matches</h4>
                  {demoUsers.slice(0, 4).map((user, index) => (
                    <div key={user.id} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.images[0]} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium font-inter">{user.name}</p>
                        <p className="text-sm text-muted-foreground font-inter">
                          Matched with {demoUsers[(index + 1) % demoUsers.length].name}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground font-inter">
                        {index + 1} hour{index !== 0 ? 's' : ''} ago
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">User Reports</CardTitle>
                <CardDescription className="font-inter">
                  Review and moderate reported content and users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { user: "Sarah Johnson", reporter: "Mike Chen", reason: "Inappropriate behavior", severity: "high" },
                    { user: "Alex Wilson", reporter: "Emma Davis", reason: "Fake profile", severity: "medium" },
                    { user: "John Smith", reporter: "Lisa Brown", reason: "Spam messages", severity: "low" }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold font-playfair">{report.user}</h3>
                          <Badge 
                            variant={report.severity === 'high' ? 'destructive' : report.severity === 'medium' ? 'default' : 'secondary'}
                          >
                            {report.severity} priority
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground font-inter">
                          Reported by {report.reporter} • {report.reason}
                        </p>
                        <p className="text-xs text-muted-foreground font-inter mt-1">
                          {index + 1} hour{index !== 0 ? 's' : ''} ago
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Ban className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Growth Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-inter">Daily Signups</span>
                      <span className="font-bold font-playfair">{adminStats.dailySignups}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter">Weekly Growth</span>
                      <span className="font-bold font-playfair text-green-600">+12.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter">Retention Rate</span>
                      <span className="font-bold font-playfair">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter">Avg. Session Time</span>
                      <span className="font-bold font-playfair">24 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair">Revenue Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-inter">Monthly Revenue</span>
                      <span className="font-bold font-playfair">${adminStats.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter">Premium Subscribers</span>
                      <span className="font-bold font-playfair">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter">Avg. Revenue per User</span>
                      <span className="font-bold font-playfair">$3.55</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-inter">Conversion Rate</span>
                      <span className="font-bold font-playfair text-green-600">4.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">Platform Settings</CardTitle>
                <CardDescription className="font-inter">
                  Configure app behavior and features
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-semibold font-playfair">Matching Settings</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-inter">Max Distance (km)</label>
                      <input type="number" defaultValue="50" className="w-full p-2 border rounded" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-inter">Age Range</label>
                      <input type="text" defaultValue="18-65" className="w-full p-2 border rounded" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold font-playfair">Premium Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-inter">Premium Price ($/month)</label>
                      <input type="number" defaultValue="9.99" className="w-full p-2 border rounded" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-inter">Video Call Credits</label>
                      <input type="number" defaultValue="10" className="w-full p-2 border rounded" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="romantic">
                    Save Settings
                  </Button>
                  <Button variant="outline">
                    Reset to Default
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;