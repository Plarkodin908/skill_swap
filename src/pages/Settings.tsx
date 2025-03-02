
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import {
  User,
  Lock,
  Bell,
  Eye,
  Globe,
  Palette,
  Shield,
  UserPlus,
  List,
  Database,
  Upload,
  Download,
  LogOut,
  Trash2,
  Moon,
  Sun,
  ImagePlus,
  CheckCircle
} from "lucide-react";

const Settings = () => {
  // State for various settings
  const [profileImage, setProfileImage] = useState("/lovable-uploads/971a0525-9509-4c96-9f90-66e481b188bc.png");
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState({
    messages: true,
    updates: false,
    newCourses: true,
    matching: true
  });
  const [inAppNotifications, setInAppNotifications] = useState({
    messages: true,
    updates: true,
    newCourses: false,
    matching: true
  });
  const [visibility, setVisibility] = useState("connections");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [language, setLanguage] = useState("english");
  const [userSkills, setUserSkills] = useState([
    "JavaScript", "React", "UI/UX Design"
  ]);
  const [userInterests, setUserInterests] = useState([
    "Web Development", "Mobile Apps", "Machine Learning"
  ]);

  // Handle profile image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you'd upload this to a server
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
          toast.success("Profile picture updated successfully!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.success(`${!darkMode ? "Dark" : "Light"} mode activated!`);
  };

  // Handle form submissions with toast notifications
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile information updated successfully!");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Password changed successfully!");
  };

  const handle2FAToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    toast.success(`Two-factor authentication ${!twoFactorEnabled ? "enabled" : "disabled"}!`);
  };

  const handleDeleteAccount = () => {
    // In a real app, this would show a confirmation dialog
    toast.error("This action would delete your account permanently.");
  };

  const handleExportData = () => {
    toast.success("Your data export has been initiated. You'll receive a download link shortly.");
  };

  const handleLogoutOtherDevices = () => {
    toast.success("All other devices have been logged out.");
  };

  // Add/Remove skills and interests
  const removeSkill = (skill: string) => {
    setUserSkills(userSkills.filter(s => s !== skill));
  };

  const removeInterest = (interest: string) => {
    setUserInterests(userInterests.filter(i => i !== interest));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-mint mb-2">Settings</h1>
        <p className="text-white/60">Manage your account preferences and profile information</p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-8 bg-forest p-1 rounded-xl">
          <TabsTrigger value="account" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <User className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Account</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <Eye className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Privacy</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <Bell className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <Palette className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="language" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <Globe className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Language</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <Shield className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="skills" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <List className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Skills</span>
          </TabsTrigger>
          <TabsTrigger value="data" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <Database className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Data</span>
          </TabsTrigger>
        </TabsList>

        <div className="bg-forest-light rounded-xl p-6 border border-mint/10">
          <ScrollArea className="h-[calc(100vh-300px)]">
            {/* Account Tab */}
            <TabsContent value="account" className="space-y-6">
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <UserPlus className="mr-2 h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal information and how others see you on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex flex-col items-center space-y-4">
                        <Avatar className="w-32 h-32 border-2 border-mint">
                          <AvatarImage src={profileImage} alt="Profile Picture" />
                          <AvatarFallback className="bg-mint/20 text-mint text-xl">JD</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex flex-col items-center">
                          <Label htmlFor="profile-image" className="cursor-pointer bg-forest hover:bg-forest-dark text-mint px-4 py-2 rounded-lg flex items-center transition-colors">
                            <ImagePlus className="h-4 w-4 mr-2" />
                            Upload Picture
                          </Label>
                          <Input 
                            id="profile-image" 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleImageUpload}
                          />
                          <p className="text-xs text-white/60 mt-2">JPG, PNG or GIF. 2MB max.</p>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" defaultValue="John" className="bg-forest-dark border-mint/10" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" defaultValue="Doe" className="bg-forest-dark border-mint/10" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" className="bg-forest-dark border-mint/10" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" defaultValue="johndoe" className="bg-forest-dark border-mint/10" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea 
                            id="bio" 
                            placeholder="Tell us about yourself..." 
                            className="h-24 bg-forest-dark border-mint/10" 
                            defaultValue="Educator specializing in web development and design. Passionate about helping others learn to code!"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-mint text-forest hover:bg-mint/90">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy" className="space-y-6">
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <Eye className="mr-2 h-5 w-5" />
                    Visibility Preferences
                  </CardTitle>
                  <CardDescription>
                    Control who can see your profile and activity on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup value={visibility} onValueChange={setVisibility} className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="public" id="public-visibility" />
                      <Label htmlFor="public-visibility" className="cursor-pointer">
                        <div className="font-medium">Public</div>
                        <div className="text-sm text-white/60">Anyone can view your profile and activity</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="connections" id="connections-visibility" />
                      <Label htmlFor="connections-visibility" className="cursor-pointer">
                        <div className="font-medium">Connections Only</div>
                        <div className="text-sm text-white/60">Only your connections can view your full profile and activity</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="private" id="private-visibility" />
                      <Label htmlFor="private-visibility" className="cursor-pointer">
                        <div className="font-medium">Private</div>
                        <div className="text-sm text-white/60">Only you can view your profile details and activity</div>
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  <Button onClick={() => toast.success("Visibility settings saved!")} className="bg-mint text-forest hover:bg-mint/90">
                    Save Visibility Settings
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <Lock className="mr-2 h-5 w-5" />
                    Two-Factor Authentication (2FA)
                  </CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Enable Two-Factor Authentication</div>
                      <div className="text-sm text-white/60">Use an authentication app to enhance your account security</div>
                    </div>
                    <Switch 
                      checked={twoFactorEnabled} 
                      onCheckedChange={handle2FAToggle} 
                      className="data-[state=checked]:bg-mint"
                    />
                  </div>
                  
                  {twoFactorEnabled && (
                    <div className="bg-forest-dark p-4 rounded-lg border border-mint/10 mt-4">
                      <div className="text-sm mb-2">Scan this QR code with your authentication app:</div>
                      <div className="w-40 h-40 mx-auto bg-white p-2 rounded-md mb-4">
                        {/* This would be a real QR code in a production app */}
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs text-white">
                          QR Code Placeholder
                        </div>
                      </div>
                      <div className="text-sm mb-2">Or enter this code manually:</div>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <code className="bg-forest-dark px-2 py-1 rounded text-mint">ABCD-EFGH-IJKL-MNOP</code>
                        <Button variant="outline" size="sm" className="h-8 border-mint/20 text-mint hover:bg-mint/10">
                          Copy
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="verification-code">Enter verification code from your app</Label>
                        <div className="flex space-x-2">
                          <Input 
                            id="verification-code" 
                            className="bg-forest-dark border-mint/10" 
                            placeholder="000000"
                          />
                          <Button className="bg-mint text-forest hover:bg-mint/90">
                            Verify
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    Email Notifications
                  </CardTitle>
                  <CardDescription>
                    Choose which email notifications you'd like to receive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-messages" className="flex-1 cursor-pointer">
                        <div className="font-medium">Messages</div>
                        <div className="text-sm text-white/60">Receive emails when you get new messages</div>
                      </Label>
                      <Switch 
                        id="email-messages" 
                        checked={emailNotifications.messages} 
                        onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, messages: checked})}
                        className="data-[state=checked]:bg-mint"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-updates" className="flex-1 cursor-pointer">
                        <div className="font-medium">Platform Updates</div>
                        <div className="text-sm text-white/60">Receive emails about new features and updates</div>
                      </Label>
                      <Switch 
                        id="email-updates" 
                        checked={emailNotifications.updates} 
                        onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, updates: checked})}
                        className="data-[state=checked]:bg-mint"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-courses" className="flex-1 cursor-pointer">
                        <div className="font-medium">New Courses</div>
                        <div className="text-sm text-white/60">Receive emails about new courses in your areas of interest</div>
                      </Label>
                      <Switch 
                        id="email-courses" 
                        checked={emailNotifications.newCourses} 
                        onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, newCourses: checked})}
                        className="data-[state=checked]:bg-mint"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-matching" className="flex-1 cursor-pointer">
                        <div className="font-medium">Skill Matching</div>
                        <div className="text-sm text-white/60">Receive emails when you match with potential learning partners</div>
                      </Label>
                      <Switch 
                        id="email-matching" 
                        checked={emailNotifications.matching} 
                        onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, matching: checked})}
                        className="data-[state=checked]:bg-mint"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => toast.success("Email notification preferences saved!")}
                    className="bg-mint text-forest hover:bg-mint/90 mt-4"
                  >
                    Save Email Preferences
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    In-App Notifications
                  </CardTitle>
                  <CardDescription>
                    Control which notifications appear within the app
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-messages" className="flex-1 cursor-pointer">
                        <div className="font-medium">Messages</div>
                        <div className="text-sm text-white/60">Show notifications for new messages</div>
                      </Label>
                      <Switch 
                        id="app-messages" 
                        checked={inAppNotifications.messages} 
                        onCheckedChange={(checked) => setInAppNotifications({...inAppNotifications, messages: checked})}
                        className="data-[state=checked]:bg-mint"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-updates" className="flex-1 cursor-pointer">
                        <div className="font-medium">Platform Updates</div>
                        <div className="text-sm text-white/60">Show notifications about new features</div>
                      </Label>
                      <Switch 
                        id="app-updates" 
                        checked={inAppNotifications.updates} 
                        onCheckedChange={(checked) => setInAppNotifications({...inAppNotifications, updates: checked})}
                        className="data-[state=checked]:bg-mint"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-courses" className="flex-1 cursor-pointer">
                        <div className="font-medium">New Courses</div>
                        <div className="text-sm text-white/60">Show notifications about new courses</div>
                      </Label>
                      <Switch 
                        id="app-courses" 
                        checked={inAppNotifications.newCourses} 
                        onCheckedChange={(checked) => setInAppNotifications({...inAppNotifications, newCourses: checked})}
                        className="data-[state=checked]:bg-mint"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-matching" className="flex-1 cursor-pointer">
                        <div className="font-medium">Skill Matching</div>
                        <div className="text-sm text-white/60">Show notifications for potential learning partnerships</div>
                      </Label>
                      <Switch 
                        id="app-matching" 
                        checked={inAppNotifications.matching} 
                        onCheckedChange={(checked) => setInAppNotifications({...inAppNotifications, matching: checked})}
                        className="data-[state=checked]:bg-mint"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => toast.success("In-app notification preferences saved!")}
                    className="bg-mint text-forest hover:bg-mint/90 mt-4"
                  >
                    Save In-App Preferences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Tab */}
            <TabsContent value="appearance" className="space-y-6">
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <Palette className="mr-2 h-5 w-5" />
                    Theme & Appearance
                  </CardTitle>
                  <CardDescription>
                    Customize how SKILL SWAP looks for you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium mb-2">Dark / Light Mode</div>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="outline"
                          onClick={toggleDarkMode}
                          className={`flex items-center gap-2 ${!darkMode ? 'border-mint text-mint' : 'border-white/10'}`}
                        >
                          <Sun className="h-4 w-4" />
                          Light
                        </Button>
                        <Button
                          variant="outline"
                          onClick={toggleDarkMode}
                          className={`flex items-center gap-2 ${darkMode ? 'border-mint text-mint' : 'border-white/10'}`}
                        >
                          <Moon className="h-4 w-4" />
                          Dark
                        </Button>
                      </div>
                    </div>
                    
                    <Separator className="bg-mint/10 my-6" />
                    
                    <div>
                      <div className="font-medium mb-2">Accent Color</div>
                      <div className="grid grid-cols-4 gap-2">
                        {["mint", "blue", "purple", "orange", "pink", "red", "green", "yellow"].map((color) => (
                          <div key={color} className="flex flex-col items-center space-y-1">
                            <button 
                              className={`w-8 h-8 rounded-full border-2 ${color === 'mint' ? 'border-white bg-mint' : 'border-transparent'}`}
                              style={{ backgroundColor: colorMapping[color] }}
                              onClick={() => toast.success(`Accent color changed to ${color}!`)}
                            >
                              {color === 'mint' && <CheckCircle className="h-4 w-4 text-forest" />}
                            </button>
                            <span className="text-xs capitalize">{color}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Language & Region Tab */}
            <TabsContent value="language" className="space-y-6">
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    Language & Region
                  </CardTitle>
                  <CardDescription>
                    Set your preferred language and time zone
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="language-select" className="font-medium">Language</Label>
                      <select 
                        id="language-select"
                        className="w-full mt-2 rounded-md border border-mint/10 bg-forest-dark px-3 py-2 text-white"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                      >
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="japanese">Japanese</option>
                        <option value="chinese">Chinese (Simplified)</option>
                        <option value="arabic">Arabic</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="timezone" className="font-medium">Time Zone</Label>
                      <select 
                        id="timezone"
                        className="w-full mt-2 rounded-md border border-mint/10 bg-forest-dark px-3 py-2 text-white"
                      >
                        <option value="utc-8">(UTC-08:00) Pacific Time (US & Canada)</option>
                        <option value="utc-7">(UTC-07:00) Mountain Time (US & Canada)</option>
                        <option value="utc-6">(UTC-06:00) Central Time (US & Canada)</option>
                        <option value="utc-5">(UTC-05:00) Eastern Time (US & Canada)</option>
                        <option value="utc-4">(UTC-04:00) Atlantic Time (Canada)</option>
                        <option value="utc-0">(UTC±00:00) London, Edinburgh</option>
                        <option value="utc+1">(UTC+01:00) Paris, Berlin, Rome</option>
                        <option value="utc+2">(UTC+02:00) Athens, Cairo</option>
                        <option value="utc+5.5">(UTC+05:30) Mumbai, New Delhi</option>
                        <option value="utc+8">(UTC+08:00) Beijing, Singapore</option>
                        <option value="utc+9">(UTC+09:00) Tokyo, Seoul</option>
                        <option value="utc+10">(UTC+10:00) Sydney, Melbourne</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="date-format" className="font-medium">Date Format</Label>
                      <select 
                        id="date-format"
                        className="w-full mt-2 rounded-md border border-mint/10 bg-forest-dark px-3 py-2 text-white"
                      >
                        <option value="mm-dd-yyyy">MM/DD/YYYY (US)</option>
                        <option value="dd-mm-yyyy">DD/MM/YYYY (UK, Europe)</option>
                        <option value="yyyy-mm-dd">YYYY-MM-DD (ISO)</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => toast.success("Language and region settings saved!")}
                    className="bg-mint text-forest hover:bg-mint/90 mt-4"
                  >
                    Save Language & Region
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-6">
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <Lock className="mr-2 h-5 w-5" />
                    Password Change
                  </CardTitle>
                  <CardDescription>
                    Update your password to keep your account secure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" className="bg-forest-dark border-mint/10" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" className="bg-forest-dark border-mint/10" />
                      <p className="text-xs text-white/60">
                        Password must be at least 8 characters with a mix of letters, numbers, and symbols
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" className="bg-forest-dark border-mint/10" />
                    </div>
                    
                    <Button type="submit" className="bg-mint text-forest hover:bg-mint/90">
                      Change Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <LogOut className="mr-2 h-5 w-5" />
                    Session Management
                  </CardTitle>
                  <CardDescription>
                    View and manage your active sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-forest-dark p-4 rounded-lg border border-mint/10">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Current Device</div>
                          <div className="text-sm text-white/60">Chrome on MacOS - New York, USA</div>
                          <div className="text-xs text-mint">Active now</div>
                        </div>
                        <div className="text-white/60 text-sm">This device</div>
                      </div>
                    </div>
                    
                    <div className="bg-forest-dark p-4 rounded-lg border border-mint/10">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">iPhone 13</div>
                          <div className="text-sm text-white/60">Safari on iOS - New York, USA</div>
                          <div className="text-xs text-white/60">Last active: 2 hours ago</div>
                        </div>
                        <Button variant="outline" size="sm" className="h-8 border-mint/20 text-mint hover:bg-mint/10">
                          Sign Out
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-forest-dark p-4 rounded-lg border border-mint/10">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Windows PC</div>
                          <div className="text-sm text-white/60">Firefox on Windows - Boston, USA</div>
                          <div className="text-xs text-white/60">Last active: 3 days ago</div>
                        </div>
                        <Button variant="outline" size="sm" className="h-8 border-mint/20 text-mint hover:bg-mint/10">
                          Sign Out
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleLogoutOtherDevices}
                    variant="destructive"
                    className="w-full mt-4"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out From All Other Devices
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills & Interests Tab */}
            <TabsContent value="skills" className="space-y-6">
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <List className="mr-2 h-5 w-5" />
                    Skills & Expertise
                  </CardTitle>
                  <CardDescription>
                    Manage skills you can teach or want to learn
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="add-skill" className="font-medium">Your Skills</Label>
                    <div className="flex flex-wrap gap-2 my-3">
                      {userSkills.map((skill) => (
                        <div 
                          key={skill} 
                          className="bg-mint/10 text-mint px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          {skill}
                          <button 
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-white/60 hover:text-white"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Input 
                        id="add-skill" 
                        placeholder="Add a skill..." 
                        className="bg-forest-dark border-mint/10" 
                      />
                      <Button 
                        onClick={() => {
                          const input = document.getElementById('add-skill') as HTMLInputElement;
                          if (input.value) {
                            setUserSkills([...userSkills, input.value]);
                            input.value = '';
                            toast.success("Skill added!");
                          }
                        }}
                        className="bg-mint text-forest hover:bg-mint/90"
                      >
                        Add
                      </Button>
                    </div>
                    
                    <p className="text-sm text-white/60 mt-2">
                      These skills will be shown on your profile and help match you with learners.
                    </p>
                  </div>
                  
                  <Separator className="bg-mint/10 my-6" />
                  
                  <div>
                    <Label htmlFor="add-interest" className="font-medium">Learning Interests</Label>
                    <div className="flex flex-wrap gap-2 my-3">
                      {userInterests.map((interest) => (
                        <div 
                          key={interest} 
                          className="bg-white/10 text-white px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          {interest}
                          <button 
                            onClick={() => removeInterest(interest)}
                            className="ml-2 text-white/60 hover:text-white"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Input 
                        id="add-interest" 
                        placeholder="Add an interest..." 
                        className="bg-forest-dark border-mint/10" 
                      />
                      <Button 
                        onClick={() => {
                          const input = document.getElementById('add-interest') as HTMLInputElement;
                          if (input.value) {
                            setUserInterests([...userInterests, input.value]);
                            input.value = '';
                            toast.success("Interest added!");
                          }
                        }}
                        className="bg-mint text-forest hover:bg-mint/90"
                      >
                        Add
                      </Button>
                    </div>
                    
                    <p className="text-sm text-white/60 mt-2">
                      These interests help us suggest relevant courses and connect you with educators.
                    </p>
                  </div>
                  
                  <Button 
                    onClick={() => toast.success("Skills and interests saved!")}
                    className="bg-mint text-forest hover:bg-mint/90 mt-4"
                  >
                    Save Skills & Interests
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Data Management Tab */}
            <TabsContent value="data" className="space-y-6">
              <Card className="bg-forest border-mint/10">
                <CardHeader>
                  <CardTitle className="text-mint flex items-center">
                    <Download className="mr-2 h-5 w-5" />
                    Export Your Data
                  </CardTitle>
                  <CardDescription>
                    Download a copy of your data from SKILL SWAP
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-forest-dark p-4 rounded-lg border border-mint/10">
                      <div className="font-medium mb-2">What data will be included:</div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-white/80">
                        <li>Profile information</li>
                        <li>Skills and interests</li>
                        <li>Messages history</li>
                        <li>Course enrollments</li>
                        <li>Teaching history</li>
                        <li>Reviews and feedback</li>
                      </ul>
                    </div>
                    
                    <p className="text-sm text-white/60">
                      Your data will be exported as a ZIP file containing JSON files. The export process may take a few minutes.
                    </p>
                    
                    <Button 
                      onClick={handleExportData}
                      className="bg-mint text-forest hover:bg-mint/90 flex items-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export My Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-forest border-mint/10 border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center">
                    <Trash2 className="mr-2 h-5 w-5" />
                    Delete Account
                  </CardTitle>
                  <CardDescription>
                    Permanently delete your account and all associated data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                      <div className="font-medium text-destructive mb-2">Warning: This action cannot be undone!</div>
                      <p className="text-sm text-white/80">
                        Deleting your account will remove all of your data from our platform, including:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-white/80">
                        <li>Your profile and personal information</li>
                        <li>All messages and connections</li>
                        <li>Course enrollments and teaching history</li>
                        <li>Reviews and feedback you've given or received</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="delete-confirmation" className="font-medium">Type "DELETE" to confirm</Label>
                      <Input id="delete-confirmation" className="bg-forest-dark border-mint/10" />
                    </div>
                    
                    <Button 
                      onClick={handleDeleteAccount}
                      variant="destructive"
                      className="w-full"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Permanently Delete My Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </ScrollArea>
        </div>
      </Tabs>
    </div>
  );
};

// Color mapping for accent colors
const colorMapping: Record<string, string> = {
  mint: '#64ffda',
  blue: '#0ea5e9',
  purple: '#8b5cf6',
  orange: '#f97316',
  pink: '#ec4899',
  red: '#ef4444',
  green: '#22c55e',
  yellow: '#eab308'
};

export default Settings;
