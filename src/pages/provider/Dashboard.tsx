
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Calendar, 
  MessageSquare, 
  DollarSign, 
  Users, 
  Star, 
  TrendingUp, 
  ArrowUpRight 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  // Example data for the dashboard
  const stats = [
    {
      title: "Total Earnings",
      value: "$1,245.89",
      change: "+12.5%",
      icon: <DollarSign className="h-4 w-4" />,
      up: true
    },
    {
      title: "Active Bookings",
      value: "12",
      change: "+4.3%",
      icon: <Calendar className="h-4 w-4" />,
      up: true
    },
    {
      title: "New Messages",
      value: "8",
      change: "-2.1%",
      icon: <MessageSquare className="h-4 w-4" />,
      up: false
    },
    {
      title: "Total Customers",
      value: "36",
      change: "+8.7%",
      icon: <Users className="h-4 w-4" />,
      up: true
    },
  ];

  const recentBookings = [
    {
      id: 1,
      customer: "John Smith",
      service: "Home Plumbing Service",
      date: "Today, 2:00 PM",
      status: "confirmed"
    },
    {
      id: 2,
      customer: "Sarah Johnson",
      service: "Electrical Repair",
      date: "Tomorrow, 10:00 AM",
      status: "pending"
    },
    {
      id: 3,
      customer: "Michael Brown",
      service: "Home Cleaning",
      date: "May 22, 1:30 PM",
      status: "completed"
    },
    {
      id: 4,
      customer: "Emma Davis",
      service: "Lawn Mowing",
      date: "May 25, 9:00 AM",
      status: "confirmed"
    },
  ];

  const recentReviews = [
    {
      customer: "Jane Wilson",
      service: "Electrical Repair",
      rating: 5,
      comment: "Excellent service! Fixed the issue quickly and professionally."
    },
    {
      customer: "Robert Taylor",
      service: "Home Cleaning",
      rating: 4,
      comment: "Good job overall, but missed a few spots under the furniture."
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "completed":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your service provider account
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="bg-primary/10 p-1 rounded-full">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className={`flex items-center text-xs mt-1 ${stat.up ? "text-green-500" : "text-red-500"}`}>
                {stat.up ? <TrendingUp className="h-3 w-3 mr-1" /> : <ArrowUpRight className="h-3 w-3 mr-1 transform rotate-90" />}
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bookings */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>
              Your latest service bookings
            </CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-3">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                  <div>
                    <div className="font-medium">{booking.service}</div>
                    <div className="text-sm text-muted-foreground">
                      {booking.customer} · {booking.date}
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(booking.status)} capitalize`}>
                    {booking.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Reviews</CardTitle>
            <CardDescription>
              What your customers are saying
            </CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-4">
              {recentReviews.map((review, i) => (
                <div key={i} className="space-y-2 p-3 bg-accent/20 rounded-lg">
                  <div className="flex justify-between">
                    <span className="font-medium">{review.customer}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {review.service}
                  </div>
                  <p className="text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
