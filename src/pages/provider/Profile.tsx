
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Globe, Calendar, Upload, Star } from "lucide-react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+255 123 456 789",
    businessName: "JD Professional Services",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    address: "123 Main Street, Dar es Salaam",
    website: "www.jdservices.com",
    bio: "Professional service provider with over 10 years of experience in electrical repairs, plumbing, and general home maintenance.",
    experience: "10+ years",
    categories: ["Home Services", "Electrical", "Plumbing"],
    specialties: "Emergency repairs, Installations, Maintenance",
    languages: ["English", "Swahili"],
    workingHours: "Monday to Friday, 8:00 AM - 6:00 PM",
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profileData });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveProfile = () => {
    setProfileData({ ...formData });
    setEditing(false);
    toast.success("Profile updated successfully");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Provider Profile</h1>
        <p className="text-muted-foreground">
          Manage your profile information and settings
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile Information</TabsTrigger>
          <TabsTrigger value="expertise">Expertise & Services</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Basic Profile Card */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Your personal and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profileData.profileImage} alt={profileData.name} />
                    <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {editing && (
                    <Button variant="ghost" size="sm" className="mt-2">
                      <Upload className="mr-2 h-4 w-4" /> Upload Photo
                    </Button>
                  )}
                </div>

                {editing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website (optional)</Label>
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-medium text-base">{profileData.name}</h3>
                      <p className="text-sm text-muted-foreground">{profileData.businessName}</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{profileData.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{profileData.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{profileData.address}</span>
                      </div>
                      {profileData.website && (
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{profileData.website}</span>
                        </div>
                      )}
                    </div>
                    <Separator />
                    <div>
                      <h4 className="text-sm font-medium mb-1">About</h4>
                      <p className="text-sm text-muted-foreground">{profileData.bio}</p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {editing ? (
                  <div className="flex justify-end gap-2 w-full">
                    <Button variant="outline" onClick={() => {
                      setEditing(false);
                      setFormData({ ...profileData });
                    }}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveProfile}>Save Changes</Button>
                  </div>
                ) : (
                  <Button className="w-full" onClick={() => setEditing(true)}>
                    Edit Profile
                  </Button>
                )}
              </CardFooter>
            </Card>

            {/* Additional Info Card */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Professional Details</CardTitle>
                <CardDescription>
                  Your professional information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {editing ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select 
                        defaultValue={formData.experience}
                        onValueChange={(value) => setFormData({ ...formData, experience: value })}
                      >
                        <SelectTrigger id="experience">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
                          <SelectItem value="1-3 years">1-3 years</SelectItem>
                          <SelectItem value="3-5 years">3-5 years</SelectItem>
                          <SelectItem value="5-10 years">5-10 years</SelectItem>
                          <SelectItem value="10+ years">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialties">Specialties</Label>
                      <Input
                        id="specialties"
                        name="specialties"
                        value={formData.specialties}
                        onChange={handleInputChange}
                        placeholder="e.g. Emergency repairs, Installations"
                      />
                      <p className="text-xs text-muted-foreground">
                        Comma separated list of your specialties
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages</Label>
                      <Input
                        id="languages"
                        name="languages"
                        value={formData.languages.join(", ")}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          languages: e.target.value.split(",").map(lang => lang.trim()) 
                        })}
                        placeholder="e.g. English, Swahili"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workingHours">Working Hours</Label>
                      <Input
                        id="workingHours"
                        name="workingHours"
                        value={formData.workingHours}
                        onChange={handleInputChange}
                        placeholder="e.g. Monday to Friday, 8:00 AM - 6:00 PM"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Experience</div>
                      <div className="text-sm text-muted-foreground">{profileData.experience}</div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Specialties</div>
                      <div className="text-sm text-muted-foreground">{profileData.specialties}</div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Languages</div>
                      <div className="text-sm text-muted-foreground">{profileData.languages.join(", ")}</div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Working Hours</div>
                      <div className="text-sm text-muted-foreground">{profileData.workingHours}</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-sm font-medium mb-2">Service Categories</div>
                      <div className="flex flex-wrap gap-2">
                        {profileData.categories.map((category, index) => (
                          <div 
                            key={index}
                            className="bg-accent/50 text-xs px-2 py-1 rounded-md"
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {editing ? (
                  <div className="w-full py-2">
                    <p className="text-xs text-muted-foreground text-center">
                      Service categories can be added when creating services
                    </p>
                  </div>
                ) : (
                  <div className="w-full bg-muted/50 rounded-md p-4">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium">Profile Completion</h3>
                      <span className="text-sm">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Complete your profile to appear higher in search results
                    </p>
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expertise">
          <Card>
            <CardHeader>
              <CardTitle>Expertise & Services</CardTitle>
              <CardDescription>
                Manage your expertise, qualifications and service details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This section will allow you to add certifications, skills, and special qualifications.
                You can also manage your service areas and availability.
              </p>
              <div className="flex items-center justify-center py-8">
                <Button>Go to Service Management</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
              <CardDescription>
                Reviews and feedback from your customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-muted/30 rounded-lg">
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-bold">4.8</div>
                    <div className="flex text-yellow-400 my-1">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5" />
                    </div>
                    <div className="text-sm text-muted-foreground">Based on 24 reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">5★</div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">80%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">4★</div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">15%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">3★</div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">5%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">2★</div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "0%" }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">0%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">1★</div>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "0%" }}></div>
                      </div>
                      <div className="text-sm w-8 text-right">0%</div>
                    </div>
                  </div>
                </div>

                {/* Sample reviews */}
                <div className="space-y-4">
                  <div className="p-4 bg-card border border-border/30 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Excellent service! John was prompt, professional and fixed our plumbing issues quickly. Highly recommend!
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" /> 
                      March 15, 2024
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card border border-border/30 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Michael Taylor</div>
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Great job on the electrical repairs. Fixed everything in one visit and the price was fair. Would use again.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" /> 
                      February 28, 2024
                    </div>
                  </div>

                  <div className="p-4 bg-card border border-border/30 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Emily Williams</div>
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      I'm very impressed with the home cleaning service. My house has never looked better! The attention to detail was amazing.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" /> 
                      February 10, 2024
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Documents & Verification</CardTitle>
              <CardDescription>
                Upload your identification and professional documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This section will allow you to upload your ID, business license, certifications,
                and other verification documents to increase your trustworthiness on the platform.
              </p>
              <div className="flex items-center justify-center py-8">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" /> Upload Documents
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
