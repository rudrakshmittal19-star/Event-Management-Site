import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Users,
  CheckSquare,
  AlertTriangle,
  Download,
  Filter,
  Brain,
  Zap
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Analytics = () => {
  const keyMetrics = [
    {
      title: "Task Completion Rate",
      value: "78%",
      change: "+12%",
      trend: "up",
      icon: CheckSquare
    },
    {
      title: "Resource Utilization",
      value: "85%",
      change: "+5%",
      trend: "up",
      icon: Users
    },
    {
      title: "Average Task Duration",
      value: "2.3 days",
      change: "-0.5 days",
      trend: "down",
      icon: Calendar
    },
    {
      title: "Risk Score",
      value: "Low",
      change: "Improving",
      trend: "down",
      icon: AlertTriangle
    }
  ];

  const predictions = [
    {
      title: "Event Completion Forecast",
      prediction: "January 19, 2024",
      confidence: "92%",
      status: "On Track"
    },
    {
      title: "Resource Shortage Risk",
      prediction: "Low Risk",
      confidence: "87%",
      status: "Optimal"
    },
    {
      title: "Delayed Tasks Prediction",
      prediction: "3 tasks at risk",
      confidence: "94%",
      status: "Action Needed"
    }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? <TrendingUp className="h-4 w-4 text-success" /> : <TrendingDown className="h-4 w-4 text-success" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track": return "bg-success/20 text-success border-success/30";
      case "Optimal": return "bg-primary/20 text-primary border-primary/30";
      case "Action Needed": return "bg-warning/20 text-warning border-warning/30";
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
                  <h1 className="text-xl font-semibold">Analytics & Insights</h1>
                  <p className="text-sm text-muted-foreground">Performance metrics and AI predictions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Select defaultValue="7days">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="90days">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* AI Predictions Section */}
            <Card className="bg-gradient-ai/5 border-ai-primary/30 shadow-ai">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-ai-primary">
                  <Brain className="h-5 w-5" />
                  <span>AI Predictions & Insights</span>
                  <Zap className="h-4 w-4 animate-pulse" />
                </CardTitle>
                <CardDescription>Machine learning powered event forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {predictions.map((prediction, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gradient-ai/10 border border-ai-primary/20">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-ai-primary text-sm">{prediction.title}</h4>
                        <Badge className={getStatusColor(prediction.status)}>
                          {prediction.status}
                        </Badge>
                      </div>
                      <p className="text-lg font-semibold text-foreground mb-1">{prediction.prediction}</p>
                      <p className="text-xs text-muted-foreground">
                        Confidence: {prediction.confidence}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyMetrics.map((metric, index) => (
                <Card key={index} className="bg-gradient-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{metric.title}</p>
                        <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
                        <div className="flex items-center mt-2 space-x-1">
                          {getTrendIcon(metric.trend)}
                          <span className={`text-xs ${metric.trend === 'up' ? 'text-success' : 'text-success'}`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10">
                        <metric.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Task Completion Trend */}
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Task Completion Trend</span>
                  </CardTitle>
                  <CardDescription>Daily task completion over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between space-x-2">
                    {[65, 78, 82, 71, 88, 92, 85].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-gradient-primary rounded-t transition-all duration-500 hover:opacity-80"
                          style={{ height: `${(height / 100) * 200}px` }}
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Jan {15 + index}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Resource Utilization */}
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Resource Utilization</span>
                  </CardTitle>
                  <CardDescription>Current allocation across teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Setup & Logistics", utilization: 85, color: "bg-primary" },
                      { name: "Technical Support", utilization: 92, color: "bg-success" },
                      { name: "Guest Services", utilization: 67, color: "bg-warning" },
                      { name: "Marketing & PR", utilization: 45, color: "bg-destructive" }
                    ].map((team, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground">{team.name}</span>
                          <span className="text-muted-foreground">{team.utilization}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${team.color} transition-all duration-500`}
                            style={{ width: `${team.utilization}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Analytics */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
                <CardDescription>Comprehensive view of event preparation metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Task Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Completed Tasks</span>
                        <span className="font-medium">123</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">In Progress</span>
                        <span className="font-medium">23</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pending</span>
                        <span className="font-medium">10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Overdue</span>
                        <span className="font-medium text-destructive">2</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Team Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg Completion Time</span>
                        <span className="font-medium">2.3 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Team Efficiency</span>
                        <span className="font-medium text-success">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Resource Conflicts</span>
                        <span className="font-medium">1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget Utilization</span>
                        <span className="font-medium">74%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Risk Assessment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Overall Risk</span>
                        <Badge className="bg-success/20 text-success border-success/30">Low</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timeline Risk</span>
                        <Badge className="bg-success/20 text-success border-success/30">Low</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Resource Risk</span>
                        <Badge className="bg-warning/20 text-warning border-warning/30">Medium</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Quality Risk</span>
                        <Badge className="bg-success/20 text-success border-success/30">Low</Badge>
                      </div>
                    </div>
                  </div>
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

export default Analytics;