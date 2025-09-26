import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { 
  Plus,
  Users,
  CheckSquare,
  Clock,
  Settings,
  UserPlus,
  Edit,
  Trash2
} from "lucide-react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Event Coordinator",
      type: "Staff",
      availability: "Available",
      tasksAssigned: 3,
      skills: ["Coordination", "Planning", "Communication"]
    },
    {
      id: 2,
      name: "Audio System Pro",
      role: "Sound Equipment",
      type: "Equipment",
      availability: "Reserved",
      tasksAssigned: 1,
      skills: ["Professional Audio", "Microphones", "Speakers"]
    },
    {
      id: 3,
      name: "Mike Rodriguez", 
      role: "Technical Lead",
      type: "Staff",
      availability: "Busy",
      tasksAssigned: 5,
      skills: ["Technical Setup", "Troubleshooting", "Audio/Visual"]
    },
    {
      id: 4,
      name: "Registration Tablets",
      role: "Check-in Equipment",
      type: "Equipment", 
      availability: "Available",
      tasksAssigned: 0,
      skills: ["Digital Check-in", "Badge Printing", "Data Collection"]
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return "bg-success/20 text-success border-success/30";
      case "Busy": return "bg-destructive/20 text-destructive border-destructive/30";
      case "Reserved": return "bg-warning/20 text-warning border-warning/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Staff": return "bg-primary/20 text-primary border-primary/30";
      case "Equipment": return "bg-secondary/20 text-secondary-foreground border-secondary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
            <div className="h-full px-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-xl font-semibold">Resource Management</h1>
                  <p className="text-sm text-muted-foreground">Manage staff and equipment allocation</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Resource
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Staff</p>
                      <p className="text-2xl font-bold text-foreground">18</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Equipment</p>
                      <p className="text-2xl font-bold text-foreground">12</p>
                    </div>
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Available</p>
                      <p className="text-2xl font-bold text-success">24</p>
                    </div>
                    <CheckSquare className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Utilization</p>
                      <p className="text-2xl font-bold text-foreground">78%</p>
                    </div>
                    <Clock className="h-8 w-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <CardDescription>{resource.role}</CardDescription>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={getTypeColor(resource.type)}>
                          {resource.type}
                        </Badge>
                        <Badge className={getAvailabilityColor(resource.availability)}>
                          {resource.availability}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Tasks Assigned</span>
                      <span className="font-semibold">{resource.tasksAssigned}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Skills/Features</p>
                      <div className="flex flex-wrap gap-1">
                        {resource.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <UserPlus className="h-3 w-3 mr-1" />
                        Assign
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common resource management tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <UserPlus className="h-5 w-5" />
                    <span className="text-sm">Add Staff</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Settings className="h-5 w-5" />
                    <span className="text-sm">Add Equipment</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <CheckSquare className="h-5 w-5" />
                    <span className="text-sm">Bulk Assign</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm">Availability</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <AIAssistant />
      </div>
    </SidebarProvider>
  );
};

export default Resources;