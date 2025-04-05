
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Calendar as CalendarIcon, 
  ChevronDown, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  MoreHorizontal, 
  Check, 
  X, 
  MessageSquare,
  Clock3
} from "lucide-react";

// Mock booking data
const mockBookings = [
  {
    id: 1,
    customer: {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+255 712 345 678",
    },
    service: "Home Plumbing Service",
    date: "2025-04-06",
    time: "10:00 AM",
    location: "123 Main Street, Dar es Salaam",
    status: "upcoming",
    notes: "Issue with kitchen sink and bathroom shower",
    price: 85,
  },
  {
    id: 2,
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+255 723 456 789",
    },
    service: "Electrical Repair",
    date: "2025-04-08",
    time: "2:00 PM",
    location: "45 Park Avenue, Dar es Salaam",
    status: "upcoming",
    notes: "Power outlet not working in living room",
    price: 95,
  },
  {
    id: 3,
    customer: {
      name: "Michael Brown",
      email: "mbrown@example.com",
      phone: "+255 734 567 890",
    },
    service: "Home Cleaning",
    date: "2025-04-04",
    time: "9:00 AM",
    location: "78 Beach Road, Dar es Salaam",
    status: "completed",
    notes: "Full house cleaning including windows",
    price: 120,
  },
  {
    id: 4,
    customer: {
      name: "Emma Davis",
      email: "emma.d@example.com",
      phone: "+255 745 678 901",
    },
    service: "Lawn Mowing",
    date: "2025-04-03",
    time: "4:00 PM",
    location: "22 Garden Street, Dar es Salaam",
    status: "cancelled",
    notes: "Front and back yard mowing",
    price: 60,
  },
  {
    id: 5,
    customer: {
      name: "Robert Wilson",
      email: "rwilson@example.com",
      phone: "+255 756 789 012",
    },
    service: "Home Plumbing Service",
    date: "2025-04-02",
    time: "11:30 AM",
    location: "15 Water Lane, Dar es Salaam",
    status: "completed",
    notes: "Leaking pipe under kitchen sink",
    price: 70,
  },
];

type BookingStatus = "upcoming" | "completed" | "cancelled";

interface Booking {
  id: number;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  service: string;
  date: string;
  time: string;
  location: string;
  status: BookingStatus;
  notes: string;
  price: number;
}

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [isBookingDetailOpen, setIsBookingDetailOpen] = useState(false);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const [message, setMessage] = useState("");

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const getDayBookings = (day: string) => {
    return bookings.filter(booking => booking.date === day);
  };

  const getBookingsByStatus = (status: BookingStatus) => {
    return bookings.filter(booking => booking.status === status);
  };

  const handleStatusChange = (id: number, status: BookingStatus) => {
    setBookings(
      bookings.map(booking =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
    toast.success(`Booking status updated to ${status}`);
  };

  const handleViewBooking = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsBookingDetailOpen(true);
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    toast.success("Message sent successfully");
    setMessage("");
    setIsMessageDialogOpen(false);
  };

  const formatDateForDaySelector = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate()
    ).padStart(2, '0')}`;
  };

  // For the date selector in the calendar view
  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
      const formattedDate = formatDateForDaySelector(newDate);
      setSelectedDay(formattedDate);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
        <p className="text-muted-foreground">
          Manage your service bookings and appointments
        </p>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list">
          <Card>
            <CardHeader className="px-6 py-4">
              <div className="flex items-center justify-between">
                <CardTitle>All Bookings</CardTitle>
                <div className="flex space-x-2">
                  <Input 
                    type="search" 
                    placeholder="Search bookings..." 
                    className="w-[200px] md:w-[250px]" 
                  />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="upcoming">
                    Upcoming ({getBookingsByStatus("upcoming").length})
                  </TabsTrigger>
                  <TabsTrigger value="completed">
                    Completed ({getBookingsByStatus("completed").length})
                  </TabsTrigger>
                  <TabsTrigger value="cancelled">
                    Cancelled ({getBookingsByStatus("cancelled").length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="space-y-4">
                  {getBookingsByStatus(activeTab as BookingStatus).length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No {activeTab} bookings found.</p>
                    </div>
                  ) : (
                    getBookingsByStatus(activeTab as BookingStatus).map((booking) => (
                      <div
                        key={booking.id}
                        className="border border-border/40 rounded-lg p-4 hover:bg-accent/10 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <div>
                                <h3 className="font-medium">{booking.service}</h3>
                                <p className="text-muted-foreground text-sm">
                                  {booking.customer.name}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                            <div className="flex flex-col text-sm">
                              <div className="flex items-center">
                                <CalendarIcon className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                                <span>{formatDate(booking.date)}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                <Clock className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                                <span>{booking.time}</span>
                              </div>
                            </div>
                            
                            <div className="ml-auto flex items-center gap-2">
                              <Badge
                                className={`${
                                  booking.status === "upcoming"
                                    ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                                    : booking.status === "completed"
                                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                                    : "bg-red-500/10 text-red-500 border-red-500/20"
                                } capitalize`}
                              >
                                {booking.status}
                              </Badge>
                              
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleViewBooking(booking)}
                              >
                                View Details
                              </Button>
                              
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Open menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  {booking.status === "upcoming" && (
                                    <>
                                      <DropdownMenuItem onClick={() => handleStatusChange(booking.id, "completed")}>
                                        <Check className="mr-2 h-4 w-4 text-green-500" />
                                        Mark as Completed
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleStatusChange(booking.id, "cancelled")}>
                                        <X className="mr-2 h-4 w-4 text-red-500" />
                                        Cancel Booking
                                      </DropdownMenuItem>
                                    </>
                                  )}
                                  {booking.status === "completed" && (
                                    <DropdownMenuItem onClick={() => handleStatusChange(booking.id, "upcoming")}>
                                      <Clock3 className="mr-2 h-4 w-4 text-blue-500" />
                                      Mark as Upcoming
                                    </DropdownMenuItem>
                                  )}
                                  {booking.status === "cancelled" && (
                                    <DropdownMenuItem onClick={() => handleStatusChange(booking.id, "upcoming")}>
                                      <Clock3 className="mr-2 h-4 w-4 text-blue-500" />
                                      Restore Booking
                                    </DropdownMenuItem>
                                  )}
                                  <DropdownMenuItem onClick={() => {
                                    setSelectedBooking(booking);
                                    setIsMessageDialogOpen(true);
                                  }}>
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Message Customer
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calendar">
          <div className="grid gap-4 md:grid-cols-[300px_1fr]">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-base">Select Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <Card>
                <CardHeader className="px-6 py-4">
                  <CardTitle>
                    {selectedDay ? formatDate(selectedDay) : "Select a day to view bookings"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  {selectedDay ? (
                    getDayBookings(selectedDay).length > 0 ? (
                      <div className="space-y-4">
                        {getDayBookings(selectedDay).map((booking) => (
                          <div
                            key={booking.id}
                            className="border border-border/40 rounded-lg p-4 hover:bg-accent/10 transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{booking.service}</h3>
                                <div className="flex items-center mt-1 text-sm">
                                  <Clock className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                                  <span>{booking.time}</span>
                                </div>
                                <p className="text-muted-foreground text-sm mt-1">
                                  {booking.customer.name}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge
                                  className={`${
                                    booking.status === "upcoming"
                                      ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                                      : booking.status === "completed"
                                      ? "bg-green-500/10 text-green-500 border-green-500/20"
                                      : "bg-red-500/10 text-red-500 border-red-500/20"
                                  } capitalize`}
                                >
                                  {booking.status}
                                </Badge>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleViewBooking(booking)}
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">No bookings on this day.</p>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">Select a day from the calendar to view bookings.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Booking Details Dialog */}
      <Dialog open={isBookingDetailOpen} onOpenChange={setIsBookingDetailOpen}>
        {selectedBooking && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Booking Details</DialogTitle>
              <DialogDescription>
                {selectedBooking.service} - {formatDate(selectedBooking.date)}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="bg-muted/30 p-4 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <h3 className="font-medium">Status</h3>
                  <Badge
                    className={`${
                      selectedBooking.status === "upcoming"
                        ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                        : selectedBooking.status === "completed"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : "bg-red-500/10 text-red-500 border-red-500/20"
                    } capitalize`}
                  >
                    {selectedBooking.status}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <h3 className="font-medium">Service Fee</h3>
                  <span>${selectedBooking.price.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Appointment Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{formatDate(selectedBooking.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{selectedBooking.time}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{selectedBooking.location}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Customer Information</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">{selectedBooking.customer.name}</p>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{selectedBooking.customer.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{selectedBooking.customer.email}</span>
                  </div>
                </div>
              </div>
              
              {selectedBooking.notes && (
                <div className="space-y-2">
                  <h3 className="font-medium">Notes</h3>
                  <p className="text-sm bg-muted/30 p-3 rounded">{selectedBooking.notes}</p>
                </div>
              )}
            </div>
            
            <DialogFooter>
              <div className="flex space-x-2 justify-between w-full">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedBooking(booking => booking ? {
                      ...booking, 
                      status: booking.status === "upcoming" ? "cancelled" : "upcoming"
                    } : null);
                    
                    handleStatusChange(
                      selectedBooking.id,
                      selectedBooking.status === "upcoming" ? "cancelled" : "upcoming"
                    );
                  }}
                >
                  {selectedBooking.status === "upcoming" ? "Cancel Booking" : "Restore Booking"}
                </Button>
                <div className="space-x-2">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setIsMessageDialogOpen(true);
                      setIsBookingDetailOpen(false);
                    }}
                  >
                    Message Customer
                  </Button>
                  {selectedBooking.status === "upcoming" && (
                    <Button
                      onClick={() => {
                        setSelectedBooking(booking => booking ? {
                          ...booking, 
                          status: "completed"
                        } : null);
                        
                        handleStatusChange(selectedBooking.id, "completed");
                      }}
                    >
                      Mark as Completed
                    </Button>
                  )}
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Message Dialog */}
      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Send Message</DialogTitle>
            <DialogDescription>
              {selectedBooking && `Send a message to ${selectedBooking.customer.name}`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="min-h-[120px]"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsMessageDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSendMessage}>Send Message</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bookings;
