import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { 
  Plus,
  Search,
  Filter,
  Calendar,
  Users,
  CheckSquare,
  Clock,
  AlertTriangle,
  MoreHorizontal,
  Edit,
  Trash2,
  UserPlus,
  Brain
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const tasks = [
    {
      id: 1,
      name: "Setup Registration Booth",
      assignee: "Sarah Chen",
      deadline: "2024-01-15",
      status: "In Progress",
      priority: "High",
      progress: 60,
      category: "Setup"
    },
    {
      id: 2,
      name: "Sound System Testing",
      assignee: "Mike Rodriguez",
      deadline: "2024-01-16",
      status: "Pending",
      priority: "Medium",
      progress: 0,
      category: "Technical"
    },
    {
      id: 3,
      name: "Catering Coordination",
      assignee: "Emma Wilson",
      deadline: "2024-01-17",
      status: "Completed",
      priority: "High",
      progress: 100,
      category: "Logistics"
    },
    {
      id: 4,
      name: "Security Briefing",
      assignee: "David Kim",
      deadline: "2024-01-18",
      status: "Pending",
      priority: "Low",
      progress: 0,
      category: "Security"
    },
    {
      id: 5,
      name: "Sponsor Banner Setup",
      assignee: "Lisa Park",
      deadline: "2024-01-19",
      status: "In Progress",
      priority: "Medium",
      progress: 30,
      category: "Marketing"
    },
    {
      id: 6,
      name: "WiFi Network Configuration",
      assignee: "Alex Johnson",
      deadline: "2024-01-20",
      status: "Pending",
      priority: "High",
      progress: 0,
      category: "Technical"
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckSquare className="h-4 w-4" />;
      case "In Progress": return <Clock className="h-4 w-4" />;
      case "Pending": return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || task.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesPriority = priorityFilter === "all" || task.priority.toLowerCase() === priorityFilter.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

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
                  <h1 className="text-xl font-semibold">Task Management</h1>
                  <p className="text-sm text-muted-foreground">Organize and track all event tasks</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* AI Insights Card */}
            <Card className="bg-gradient-ai/5 border-ai-primary/30 shadow-ai">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-ai-primary">
                  <Brain className="h-5 w-5" />
                  <span>AI Task Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-ai/10 border border-ai-primary/20">
                    <p className="text-sm text-ai-primary font-medium">Predicted Delays</p>
                    <p className="text-2xl font-bold text-ai-primary">3 Tasks</p>
                    <p className="text-xs text-muted-foreground">Based on current progress</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-ai/10 border border-ai-primary/20">
                    <p className="text-sm text-ai-primary font-medium">Optimal Assignment</p>
                    <p className="text-2xl font-bold text-ai-primary">92%</p>
                    <p className="text-xs text-muted-foreground">Resource efficiency score</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-ai/10 border border-ai-primary/20">
                    <p className="text-sm text-ai-primary font-medium">Completion Forecast</p>
                    <p className="text-2xl font-bold text-ai-primary">Jan 19</p>
                    <p className="text-xs text-muted-foreground">Estimated finish date</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search tasks or assignees..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-input border-border"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Priority</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tasks Table */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>All Tasks ({filteredTasks.length})</CardTitle>
                <CardDescription>Complete overview of event tasks and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task Name</TableHead>
                      <TableHead>Assignee</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-foreground">{task.name}</p>
                            <p className="text-xs text-muted-foreground">{task.category}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{task.assignee}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(task.status)}>
                            {getStatusIcon(task.status)}
                            <span className="ml-1">{task.status}</span>
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(task.priority)}>
                            {task.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{task.deadline}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${task.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">{task.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit Task
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <UserPlus className="h-4 w-4 mr-2" />
                                Reassign
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>

        <AIAssistant />
      </div>
    </SidebarProvider>
  );
};

export default Tasks;