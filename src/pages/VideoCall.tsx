import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Video, VideoOff, Mic, MicOff, Phone, PhoneOff, 
  MessageCircle, Heart, Gift, Settings, Users, Maximize2 
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { demoUsers } from "@/data/demoData";

const VideoCall = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isSearching, setIsSearching] = useState(userId === 'random');

  const currentUser = userId && userId !== 'random' 
    ? demoUsers.find(u => u.id === userId) 
    : null;

  const randomUser = demoUsers[Math.floor(Math.random() * demoUsers.length)];
  const chatPartner = currentUser || randomUser;

  useEffect(() => {
    if (isSearching) {
      const timer = setTimeout(() => {
        setIsSearching(false);
        setIsConnected(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSearching]);

  useEffect(() => {
    if (isConnected) {
      const timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isConnected]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    navigate('/dashboard');
  };

  const handleSendGift = () => {
    alert('Gift sent! 💝');
  };

  if (isSearching) {
    return (
      <div className="min-h-screen bg-gradient-passion flex items-center justify-center">
        <Card className="p-8 text-center max-w-md w-full mx-4">
          <CardContent>
            <div className="animate-pulse mb-6">
              <Users className="w-16 h-16 text-accent mx-auto mb-4" />
            </div>
            <h2 className="text-xl font-bold font-playfair mb-2">Finding Someone Special...</h2>
            <p className="text-muted-foreground font-inter mb-6">
              We're connecting you with someone who shares your interests
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-inter">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Searching for available users...
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-inter">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-300"></div>
                Checking compatibility...
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-inter">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-700"></div>
                Establishing connection...
              </div>
            </div>
            <Button variant="outline" className="mt-6" onClick={() => navigate('/dashboard')}>
              Cancel Search
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate-cosmos/20 to-claret/20">
        {/* Your video feed (smaller) */}
        <div className="absolute top-4 right-4 w-64 h-48 bg-gray-800 rounded-lg overflow-hidden border-2 border-white/20 z-10">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
            {isVideoOn ? (
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300" 
                alt="You" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <VideoOff className="w-8 h-8 text-white/60 mx-auto mb-2" />
                <p className="text-white/60 text-sm font-inter">Camera Off</p>
              </div>
            )}
          </div>
          <div className="absolute bottom-2 left-2">
            <Badge variant="secondary" className="bg-black/50 text-white">
              You
            </Badge>
          </div>
        </div>

        {/* Partner's video feed (main) */}
        <div className="w-full h-full flex items-center justify-center">
          {chatPartner ? (
            <img 
              src={chatPartner.images[0]} 
              alt={chatPartner.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center text-white">
              <Video className="w-16 h-16 mx-auto mb-4 opacity-60" />
              <p className="text-xl font-playfair">Connecting...</p>
            </div>
          )}
        </div>

        {/* Partner info overlay */}
        {chatPartner && isConnected && (
          <div className="absolute top-4 left-4 z-10">
            <Card className="bg-black/50 border-white/20 text-white">
              <CardContent className="p-4 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={chatPartner.images[0]} />
                  <AvatarFallback>{chatPartner.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold font-playfair">{chatPartner.name}, {chatPartner.age}</h3>
                  <p className="text-sm text-white/80 font-inter">{chatPartner.location}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                      Connected
                    </Badge>
                    <span className="text-sm font-inter">{formatDuration(callDuration)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex justify-center items-center gap-4">
          {/* Video toggle */}
          <Button
            variant={isVideoOn ? "secondary" : "destructive"}
            size="lg"
            className="rounded-full w-14 h-14"
            onClick={() => setIsVideoOn(!isVideoOn)}
          >
            {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
          </Button>

          {/* Audio toggle */}
          <Button
            variant={isAudioOn ? "secondary" : "destructive"}
            size="lg"
            className="rounded-full w-14 h-14"
            onClick={() => setIsAudioOn(!isAudioOn)}
          >
            {isAudioOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
          </Button>

          {/* End call */}
          <Button
            variant="destructive"
            size="lg"
            className="rounded-full w-16 h-16"
            onClick={handleEndCall}
          >
            <PhoneOff className="w-8 h-8" />
          </Button>

          {/* Chat */}
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full w-14 h-14"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>

          {/* Send gift */}
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full w-14 h-14"
            onClick={handleSendGift}
          >
            <Gift className="w-6 h-6" />
          </Button>

          {/* More options */}
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full w-14 h-14"
          >
            <Settings className="w-6 h-6" />
          </Button>
        </div>

        {/* Connection status */}
        <div className="text-center mt-4">
          <div className="flex items-center justify-center gap-2 text-white/80">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-inter">Connected • {formatDuration(callDuration)}</span>
          </div>
        </div>
      </div>

      {/* Action buttons (overlay) */}
      {chatPartner && isConnected && (
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 space-y-3">
          <Button
            variant="romantic"
            size="lg"
            className="rounded-full w-14 h-14 shadow-romantic"
          >
            <Heart className="w-6 h-6" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full w-14 h-14"
          >
            <Maximize2 className="w-6 h-6" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default VideoCall;