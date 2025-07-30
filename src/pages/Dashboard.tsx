import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Video, Zap, Settings, User, Crown, Gift } from "lucide-react";
import { demoUsers, demoMatches } from "@/data/demoData";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [likedUsers, setLikedUsers] = useState<string[]>([]);

  const handleLike = (userId: string) => {
    setLikedUsers(prev => [...prev, userId]);
  };

  const handleVideoCall = (userId: string) => {
    // Navigate to video call page
    window.location.href = `/video-call/${userId}`;
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
            <h1 className="text-xl font-bold font-playfair bg-gradient-romantic bg-clip-text text-transparent">
              Nawa Napam
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Crown className="w-4 h-4 mr-2" />
              Premium
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <Tabs defaultValue="discover" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="discover" className="font-inter">
              <Heart className="w-4 h-4 mr-2" />
              Discover
            </TabsTrigger>
            <TabsTrigger value="matches" className="font-inter">
              <MessageCircle className="w-4 h-4 mr-2" />
              Matches ({demoMatches.length})
            </TabsTrigger>
            <TabsTrigger value="video" className="font-inter">
              <Video className="w-4 h-4 mr-2" />
              Video Chat
            </TabsTrigger>
            <TabsTrigger value="profile" className="font-inter">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-playfair mb-2">Discover People</h2>
              <p className="text-muted-foreground font-inter">Find your perfect match</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoUsers.map((user) => (
                <Card key={user.id} className="overflow-hidden shadow-romantic hover:shadow-warm transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={user.images[0]} 
                      alt={user.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      {user.verified && (
                        <Badge variant="secondary" className="bg-accent/20 text-accent">
                          <Zap className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 left-4">
                      {user.isOnline ? (
                        <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                          Online
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          {user.lastSeen}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold font-playfair">{user.name}, {user.age}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 font-inter">{user.location}</p>
                    <p className="text-sm mb-4 font-inter line-clamp-2">{user.bio}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {user.interests.slice(0, 3).map((interest) => (
                        <Badge key={interest} variant="outline" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleVideoCall(user.id)}
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Video Chat
                      </Button>
                      <Button 
                        variant="romantic" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleLike(user.id)}
                        disabled={likedUsers.includes(user.id)}
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        {likedUsers.includes(user.id) ? 'Liked' : 'Like'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-playfair mb-2">Your Matches</h2>
              <p className="text-muted-foreground font-inter">Start conversations with your matches</p>
            </div>

            <div className="space-y-4">
              {demoMatches.map((match) => {
                const user = demoUsers.find(u => u.id === match.matchedUserId);
                if (!user) return null;

                return (
                  <Card key={match.id} className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={user.images[0]} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold font-playfair">{user.name}</h3>
                          {user.isOnline && (
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-inter mb-1">
                          {match.lastMessage}
                        </p>
                        <p className="text-xs text-muted-foreground font-inter">
                          Matched {new Date(match.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        {match.unreadCount > 0 && (
                          <Badge variant="destructive" className="self-end">
                            {match.unreadCount}
                          </Badge>
                        )}
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Video className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Gift className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="video" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-playfair mb-2">Video Chat</h2>
              <p className="text-muted-foreground font-inter">Connect face-to-face with your matches</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Video className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold font-playfair mb-2">Random Video Chat</h3>
                <p className="text-muted-foreground font-inter mb-4">
                  Meet someone new through video chat
                </p>
                <Link to="/video-call/random">
                  <Button variant="romantic" className="w-full">
                    Start Random Chat
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold font-playfair mb-2">Match Video Chat</h3>
                <p className="text-muted-foreground font-inter mb-4">
                  Video chat with your existing matches
                </p>
                <Button variant="outline" className="w-full">
                  View Matches
                </Button>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold font-playfair mb-4">Recent Video Calls</h3>
              <div className="space-y-3">
                {demoUsers.slice(0, 3).map((user) => (
                  <div key={user.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Avatar>
                      <AvatarImage src={user.images[0]} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium font-inter">{user.name}</p>
                      <p className="text-sm text-muted-foreground font-inter">Video call • 2 hours ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Video className="w-4 h-4 mr-2" />
                      Call Again
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-playfair mb-2">Your Profile</h2>
              <p className="text-muted-foreground font-inter">Manage your dating profile</p>
            </div>

            <Card className="p-6">
              <div className="flex items-center gap-6 mb-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold font-playfair">Alex Johnson</h3>
                  <p className="text-muted-foreground font-inter">28 • New York, NY</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">
                      <Zap className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                    <Badge variant="outline">Premium Member</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold font-playfair mb-2">About</h4>
                  <p className="text-muted-foreground font-inter">
                    Passionate about life, love, and adventure. Looking for someone to share meaningful moments with.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold font-playfair mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Travel", "Photography", "Cooking", "Music", "Fitness", "Art"].map((interest) => (
                      <Badge key={interest} variant="outline">{interest}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="romantic" className="flex-1">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Link to="/admin" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Crown className="w-4 h-4 mr-2" />
                      Admin Panel
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;