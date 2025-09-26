import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { 
  Calendar, 
  Users, 
  CheckSquare, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  Plus,
  FileBarChart,
  Zap
} from "lucide-react";

const Dashboard = () => {
  const statsCards = [
    {
      title: "Total Tasks",
      value: "156",
      change: "+12%",
      icon: CheckSquare,
      trend: "up"
    },
    {
      title: "Active Staff",
      value: "24",
      change: "+3",
      icon: Users,
      trend: "up"
    },
    {
      title: "Pending Tasks",
      value: "23",
      change: "-8%",
      icon: Clock,
      trend: "down"
    },
    {
      title: "Resource Usage",
      value: "78%",
      change: "+5%",
      icon: TrendingUp,
      trend: "up"
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      name: "Setup Registration Booth",
      assignee: "Sarah Chen",
      deadline: "2024-01-15",
      status: "In Progress",
      priority: "High"
    },
    {
      id: 2,
      name: "Sound System Testing",
      assignee: "Mike Rodriguez",
      deadline: "2024-01-16",
      status: "Pending", 
      priority: "Medium"
    },
    {
      id: 3,
      name: "Catering Coordination",
      assignee: "Emma Wilson",
      deadline: "2024-01-17",
      status: "Completed",
      priority: "High"
    },
    {
      id: 4,
      name: "Security Briefing",
      assignee: "David Kim",
      deadline: "2024-01-18",
      status: "Pending",
      priority: "Low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-destructive/20 text-destructive border-destructive/30";
      case "Medium": return "bg-warning/20 text-warning border-warning/30";
      case "Low": return "bg-success/20 text-success border-success/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success/20 text-success border-success/30";
      case "In Progress": return "bg-primary/20 text-primary border-primary/30";
      case "Pending": return "bg-warning/20 text-warning border-warning/30";
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
                  <h1 className="text-xl font-semibold">Event Overview</h1>
                  <p className="text-sm text-muted-foreground">Tech Conference 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
                <Button size="sm" variant="outline">
                  <FileBarChart className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Hero Card */}
            <Card className="bg-gradient-card border-border shadow-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-foreground">Tech Conference 2024</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      January 20-22, 2024 • San Francisco Convention Center
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-gradient-ai animate-ai-pulse">
                      <Zap className="h-5 w-5 text-foreground" />
                    </div>
                    <Badge variant="outline" className="border-ai-primary/30 text-ai-primary">
                      AI Optimized
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Event Progress</p>
                    <Progress value={68} className="h-2" />
                    <p className="text-xs text-muted-foreground">68% Complete</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">156</p>
                    <p className="text-sm text-muted-foreground">Total Tasks</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">24</p>
                    <p className="text-sm text-muted-foreground">Staff Members</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {statsCards.map((stat) => (
                <Card key={stat.title} className="bg-gradient-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className={`text-xs ${stat.trend === 'up' ? 'text-success' : 'text-warning'}`}>
                          {stat.change} from last week
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Upcoming Tasks */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>Upcoming Tasks</span>
                    </CardTitle>
                    <CardDescription>Tasks requiring attention in the next 7 days</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All Tasks
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-accent/20 border border-border">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-foreground">{task.name}</h4>
                          <Badge className={getPriorityColor(task.priority)}>
                            {task.priority}
                          </Badge>
                          <Badge className={getStatusColor(task.status)}>
                            {task.status}
                          </Badge>
                        </div>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="mr-4">{task.assignee}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{task.deadline}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Reassign
                        </Button>
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

export default Dashboard;