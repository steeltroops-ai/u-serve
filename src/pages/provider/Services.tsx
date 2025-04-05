
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, MoreHorizontal, Edit, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock service data
const initialServices = [
  {
    id: 1,
    title: "Home Plumbing Service",
    description: "Professional plumbing services for your home needs",
    price: 85,
    category: "Home Services",
    image: "https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsdW1iaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    isActive: true,
    bookedCount: 24
  },
  {
    id: 2,
    title: "Electrical Repair",
    description: "Fix electrical issues in your home or business",
    price: 95,
    category: "Home Services",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    isActive: true,
    bookedCount: 18
  },
  {
    id: 3,
    title: "Home Cleaning",
    description: "Complete home cleaning service",
    price: 120,
    category: "Home Services",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    isActive: true,
    bookedCount: 32
  },
  {
    id: 4,
    title: "Lawn Mowing Service",
    description: "Professional lawn care for residential properties",
    price: 60,
    category: "Garden & Pool",
    image: "https://images.unsplash.com/photo-1589923188900-85b8d5f39f44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3biUyMG1vd2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    isActive: false,
    bookedCount: 7
  },
];

const categories = [
  "Home Services",
  "Automotive",
  "Security Services",
  "Garden & Pool",
  "Technical Support",
  "Boda Boda Services",
  "Agricultural Services",
  "Solar Power",
  "Financial Services",
];

const Services = () => {
  const [services, setServices] = useState(initialServices);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleCategoryChange = (value: string) => {
    setNewService({ ...newService, category: value });
  };

  const handleServiceToggle = (id: number) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, isActive: !service.isActive } : service
    ));
    
    const service = services.find(s => s.id === id);
    if (service) {
      toast.success(
        `${service.title} is now ${!service.isActive ? "active" : "inactive"}`
      );
    }
  };

  const handleSubmit = () => {
    if (!newService.title || !newService.description || !newService.price || !newService.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    // If we're editing an existing service
    if (editingServiceId !== null) {
      setServices(
        services.map(service =>
          service.id === editingServiceId
            ? {
                ...service,
                title: newService.title,
                description: newService.description,
                price: parseFloat(newService.price),
                category: newService.category,
                image: newService.image || service.image,
              }
            : service
        )
      );
      toast.success("Service updated successfully");
    } else {
      // Adding a new service
      const newId = Math.max(...services.map(s => s.id)) + 1;
      setServices([
        ...services,
        {
          id: newId,
          title: newService.title,
          description: newService.description,
          price: parseFloat(newService.price),
          category: newService.category,
          image: newService.image || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          isActive: true,
          bookedCount: 0
        },
      ]);
      toast.success("Service added successfully");
    }

    // Reset form and close dialog
    setNewService({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
    setEditingServiceId(null);
    setIsDialogOpen(false);
  };

  const handleEditService = (id: number) => {
    const serviceToEdit = services.find(service => service.id === id);
    if (serviceToEdit) {
      setNewService({
        title: serviceToEdit.title,
        description: serviceToEdit.description,
        price: serviceToEdit.price.toString(),
        category: serviceToEdit.category,
        image: serviceToEdit.image,
      });
      setEditingServiceId(id);
      setIsDialogOpen(true);
    }
  };

  const handleDeleteService = (id: number) => {
    const serviceToDelete = services.find(service => service.id === id);
    setServices(services.filter(service => service.id !== id));
    
    if (serviceToDelete) {
      toast.success(`${serviceToDelete.title} has been deleted`);
    }
  };

  const filteredServices = activeTab === "all" 
    ? services 
    : activeTab === "active" 
      ? services.filter(service => service.isActive) 
      : services.filter(service => !service.isActive);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Services</h1>
          <p className="text-muted-foreground">
            Manage the services you offer
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingServiceId !== null ? "Edit Service" : "Add New Service"}
              </DialogTitle>
              <DialogDescription>
                {editingServiceId !== null 
                  ? "Make changes to your service listing" 
                  : "Add details about the service you provide"
                }
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="title">Service Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={newService.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Professional Plumbing Services"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={newService.description}
                  onChange={handleInputChange}
                  placeholder="Describe your service in detail"
                  className="min-h-[120px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={newService.price}
                    onChange={handleInputChange}
                    placeholder="e.g. 85.99"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={newService.category} 
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="image">Image URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="image"
                    name="image"
                    value={newService.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    className="flex-1"
                  />
                  <Button variant="outline" type="button" className="flex-shrink-0">
                    <Upload className="mr-2 h-4 w-4" /> Upload
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Provide a URL or upload an image for your service
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setIsDialogOpen(false);
                setEditingServiceId(null);
                setNewService({
                  title: "",
                  description: "",
                  price: "",
                  category: "",
                  image: "",
                });
              }}>Cancel</Button>
              <Button onClick={handleSubmit}>
                {editingServiceId !== null ? "Save Changes" : "Add Service"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Services ({services.length})</TabsTrigger>
          <TabsTrigger value="active">
            Active ({services.filter(s => s.isActive).length})
          </TabsTrigger>
          <TabsTrigger value="inactive">
            Inactive ({services.filter(s => !s.isActive).length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-6">
          {filteredServices.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-3 mb-4">
                <Plus className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium">No services found</h3>
              <p className="mb-6 text-sm text-muted-foreground max-w-sm">
                You don't have any {activeTab !== "all" ? activeTab : ""} services yet. 
                Click the "Add New Service" button to create your first service.
              </p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Add New Service
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg line-clamp-2">{service.title}</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleEditService(service.id)}>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="text-red-600"
                            onClick={() => handleDeleteService(service.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center mt-2">
                      <Badge variant="outline" className="bg-accent/50">
                        {service.category}
                      </Badge>
                      <div className="text-sm text-muted-foreground ml-auto">
                        {service.bookedCount} bookings
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mt-2 text-lg font-bold">${service.price.toFixed(2)}</div>
                  </CardContent>
                  <CardFooter className="pt-1">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <Switch
                          id={`service-status-${service.id}`}
                          checked={service.isActive}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <Label 
                          htmlFor={`service-status-${service.id}`}
                          className="ml-2 text-sm"
                        >
                          {service.isActive ? "Active" : "Inactive"}
                        </Label>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleEditService(service.id)}
                      >
                        Edit
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Services;
