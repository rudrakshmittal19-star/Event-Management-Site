import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { 
  Plus,
  Users,
  CheckSquare,
  Clock,
  UserPlus,
  UserMinus,
  Edit,
  MoreHorizontal
} from "lucide-react";

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "Setup & Logistics",
      members: [
        { name: "Sarah Chen", role: "Lead Coordinator" },
        { name: "Mike Rodriguez", role: "Technical Setup" },
        { name: "Emma Wilson", role: "Logistics Specialist" }
      ],
      tasksAssigned: 12,
      tasksCompleted: 8,
      progress: 67,
      status: "Active"
    },
    {
      id: 2,
      name: "Technical Support",
      members: [
        { name: "Alex Johnson", role: "IT Lead" },
        { name: "David Kim", role: "Network Admin" },
        { name: "Lisa Park", role: "AV Specialist" }
      ],
      tasksAssigned: 8,
      tasksCompleted: 3,
      progress: 38,
      status: "Active"
    },
    {
      id: 3,
      name: "Guest Services",
      members: [
        { name: "Rachel Green", role: "Service Manager" },
        { name: "Tom Wilson", role: "Registration Lead" },
        { name: "Amy Foster", role: "Guest Relations" }
      ],
      tasksAssigned: 15,
      tasksCompleted: 12,
      progress: 80,
      status: "Ahead"
    },
    {
      id: 4,
      name: "Marketing & PR",
      members: [
        { name: "Jake Morrison", role: "Marketing Lead" },
        { name: "Nina Patel", role: "Social Media" }
      ],
      tasksAssigned: 6,
      tasksCompleted: 2,
      progress: 33,
      status: "Behind"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ahead": return "bg-success/20 text-success border-success/30";
      case "Active": return "bg-primary/20 text-primary border-primary/30";
      case "Behind": return "bg-destructive/20 text-destructive border-destructive/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-success";
    if (progress >= 50) return "bg-primary";
    return "bg-warning";
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
                  <h1 className="text-xl font-semibold">Team Management</h1>
                  <p className="text-sm text-muted-foreground">Monitor team performance and workload</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Team
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Team Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Teams</p>
                      <p className="text-2xl font-bold text-foreground">4</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Members</p>
                      <p className="text-2xl font-bold text-foreground">11</p>
                    </div>
                    <UserPlus className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Tasks Completed</p>
                      <p className="text-2xl font-bold text-success">25</p>
                    </div>
                    <CheckSquare className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Progress</p>
                      <p className="text-2xl font-bold text-foreground">55%</p>
                    </div>
                    <Clock className="h-8 w-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Teams Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {teams.map((team) => (
                <Card key={team.id} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{team.name}</CardTitle>
                        <CardDescription>{team.members.length} members</CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(team.status)}>
                          {team.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Progress Section */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{team.progress}%</span>
                      </div>
                      <Progress value={team.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{team.tasksCompleted} completed</span>
                        <span>{team.tasksAssigned} total tasks</span>
                      </div>
                    </div>

                    {/* Team Members */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Team Members</p>
                      <div className="space-y-2">
                        {team.members.map((member, index) => (
                          <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-accent/20">
                            <div>
                              <p className="text-sm font-medium">{member.name}</p>
                              <p className="text-xs text-muted-foreground">{member.role}</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Team Actions */}
                    <div className="flex gap-2 pt-4 border-t border-border">
                      <Button size="sm" variant="outline" className="flex-1">
                        <UserPlus className="h-3 w-3 mr-1" />
                        Add Member
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <CheckSquare className="h-3 w-3 mr-1" />
                        Assign Task
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                        <UserMinus className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Performance Metrics */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Team Performance Overview</CardTitle>
                <CardDescription>Workload distribution and efficiency metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {teams.map((team) => (
                    <div key={team.id} className="flex items-center justify-between p-4 rounded-lg bg-accent/20 border border-border">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{team.name}</h4>
                          <Badge className={getStatusColor(team.status)}>
                            {team.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Members</p>
                            <p className="font-semibold">{team.members.length}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Tasks</p>
                            <p className="font-semibold">{team.tasksCompleted}/{team.tasksAssigned}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Efficiency</p>
                            <p className="font-semibold">{team.progress}%</p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 w-24">
                        <Progress value={team.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
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

export default Teams;