import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Mail, Lock, User, MapPin, Calendar, Camera } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete signup - redirect to dashboard
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const progress = (step / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center animate-romantic-glow overflow-hidden">
              <img 
                src="/lovable-uploads/f6f77930-ba48-4dbf-bc97-5fb28b43607b.png" 
                alt="Nawa Napam Logo" 
                className="w-full h-full object-cover filter hue-rotate-[300deg] saturate-150 brightness-110"
              />
            </div>
            <h1 className="text-2xl font-bold font-playfair bg-gradient-romantic bg-clip-text text-transparent">
              Nawa Napam
            </h1>
          </div>
          <p className="text-muted-foreground font-inter">Start your love journey</p>
        </div>

        <Card className="shadow-romantic border-salmon-pink/20">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair">Join Nawa Napam</CardTitle>
            <CardDescription className="font-inter">
              Step {step} of 3 - {step === 1 ? "Basic Info" : step === 2 ? "Personal Details" : "Profile Setup"}
            </CardDescription>
            <Progress value={progress} className="mt-4" />
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-inter">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 font-inter"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-inter">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      className="pl-10 font-inter"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-inter">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="pl-10 font-inter"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="font-inter">Age</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="age"
                        type="number"
                        placeholder="25"
                        className="pl-10 font-inter"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-inter">Gender</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="font-inter">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City, State"
                      className="pl-10 font-inter"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="font-inter">Looking for</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bio" className="font-inter">About You</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    className="font-inter"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-inter">Profile Photo</Label>
                  <div className="border-2 border-dashed border-salmon-pink/30 rounded-lg p-6 text-center">
                    <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground font-inter">
                      Click to upload your best photo
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose Photo
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              {step > 1 && (
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
              )}
              <Button 
                variant="romantic" 
                onClick={handleNext} 
                className={step === 1 ? "w-full" : "flex-1"}
              >
                {step === 3 ? (
                  <>
                    <Heart className="w-4 h-4 mr-2" />
                    Complete Profile
                  </>
                ) : (
                  "Next Step"
                )}
              </Button>
            </div>

            {step === 1 && (
              <div className="mt-6">
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <Button variant="outline" className="w-full font-inter">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Sign up with Google
                  </Button>
                  <Button variant="outline" className="w-full font-inter">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Sign up with Facebook
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
          {step === 1 && (
            <div className="px-6 pb-6">
              <p className="text-sm text-muted-foreground font-inter text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-accent hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Signup;