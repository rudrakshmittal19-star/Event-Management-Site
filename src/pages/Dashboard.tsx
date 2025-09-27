import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Zap,
  Brain,
  Sparkles,
  Target,
  Activity,
  BarChart3,
  Lightbulb,
  Send
} from "lucide-react";

const Dashboard = () => {
  const statsCards = [
    {
      title: "AI Predictions",
      value: "97%",
      change: "+3%",
      icon: Brain,
      trend: "up",
      isAI: true
    },
    {
      title: "Risk Alerts",
      value: "2",
      change: "-4",
      icon: AlertTriangle,
      trend: "down",
      isAI: true
    },
    {
      title: "Automation Rate",
      value: "84%",
      change: "+12%",
      icon: Target,
      trend: "up",
      isAI: true
    },
    {
      title: "Resource Efficiency",
      value: "92%",
      change: "+8%",
      icon: Activity,
      trend: "up",
      isAI: true
    }
  ];

  const riskAlerts = [
    {
      id: 1,
      title: "Sponsor Acquisition Delay",
      type: "High Risk",
      prediction: "May impact event funding by 15%",
      confidence: 94,
      impact: "Financial",
      deadline: "2024-12-30"
    },
    {
      id: 2,
      title: "Venue Capacity Concern", 
      type: "Medium Risk",
      prediction: "Registration trending 20% above capacity",
      confidence: 87,
      impact: "Logistics",
      deadline: "2025-01-15"
    }
  ];

  const aiInsights = [
    {
      id: 1,
      insight: "Optimal staff allocation: +3 volunteers needed for registration",
      action: "auto-assign",
      confidence: 94,
      impact: "High"
    },
    {
      id: 2,
      insight: "Budget optimization: Save $2,400 by switching catering vendor",
      action: "review",
      confidence: 87,
      impact: "Medium"
    },
    {
      id: 3,
      insight: "Timeline adjustment: Move speaker prep 2 days earlier",
      action: "auto-schedule", 
      confidence: 91,
      impact: "High"
    }
  ];

  const generatedPlans = [
    {
      id: 1,
      title: "Tech Conference Complete Setup",
      tasksGenerated: 47,
      dependencies: 12,
      timeline: "5 days",
      status: "Generated"
    },
    {
      id: 2,
      title: "Sponsor Activation Plan",
      tasksGenerated: 23,
      dependencies: 8,
      timeline: "3 days", 
      status: "In Review"
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
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      <Brain className="h-6 w-6 text-ai-primary" />
                      AEO Command Center
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Autonomous Event Operation • AI-Powered Event Management
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-gradient-ai animate-ai-pulse">
                      <Activity className="h-5 w-5 text-foreground" />
                    </div>
                    <Badge variant="outline" className="border-ai-primary/30 text-ai-primary">
                      Live Monitoring
                    </Badge>
                    <Badge className="bg-gradient-ai text-foreground">
                      AI Active
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
                      <div className={`p-3 rounded-lg ${stat.isAI ? 'bg-gradient-ai/20' : 'bg-primary/10'}`}>
                        <stat.icon className={`h-5 w-5 ${stat.isAI ? 'text-ai-primary' : 'text-primary'}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Command Center Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Risk Alerts & Predictive Analytics */}
              <Card className="lg:col-span-2 bg-gradient-card border-ai-primary/30 shadow-ai">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-ai-primary">
                    <AlertTriangle className="h-5 w-5" />
                    Predictive Risk Management
                  </CardTitle>
                  <CardDescription>AI-powered risk detection and prevention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskAlerts.map((alert) => (
                      <div key={alert.id} className="p-4 rounded-lg border border-ai-primary/20 bg-gradient-ai/5">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium text-foreground">{alert.title}</h4>
                              <Badge className={alert.type.includes('High') ? 'bg-destructive/20 text-destructive' : 'bg-warning/20 text-warning'}>
                                {alert.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{alert.prediction}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>Confidence: {alert.confidence}%</span>
                              <span>Impact: {alert.impact}</span>
                              <span>Deadline: {alert.deadline}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-xs">
                              View Details
                            </Button>
                            <Button size="sm" className="text-xs bg-gradient-ai hover:opacity-90">
                              Auto-Resolve
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full bg-gradient-ai hover:opacity-90 text-foreground">
                      <Brain className="h-4 w-4 mr-2" />
                      Generate Risk Assessment Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* AI Insights Panel */}
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-ai-primary" />
                    AI Insights & Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {aiInsights.map((insight) => (
                      <div key={insight.id} className="p-3 rounded-lg bg-gradient-ai/10 border border-ai-primary/20">
                        <p className="text-xs text-foreground font-medium mb-2">{insight.insight}</p>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-ai-primary">{insight.confidence}% confidence</span>
                          <Badge className={insight.impact === 'High' ? 'bg-ai-primary/20 text-ai-primary' : 'bg-muted/20'}>
                            {insight.impact}
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs w-full border-ai-primary/30 hover:bg-ai-primary/10">
                          {insight.action === 'auto-assign' ? 'Auto-Apply' : 
                           insight.action === 'auto-schedule' ? 'Auto-Schedule' : 'Review & Apply'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Generative Project Planning */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-gradient-card border-ai-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-ai-primary">
                    <Sparkles className="h-5 w-5" />
                    Generative Project Planning
                  </CardTitle>
                  <CardDescription>AI creates complete task lists from simple prompts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Enter event prompt (e.g., 'Create setup plan for 500-person tech conference')"
                        className="flex-1 bg-input border-ai-primary/30"
                      />
                      <Button className="bg-gradient-ai hover:opacity-90 text-foreground">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {generatedPlans.map((plan) => (
                        <div key={plan.id} className="p-3 rounded-lg bg-ai-primary/5 border border-ai-primary/20">
                          <h4 className="font-medium text-foreground text-sm">{plan.title}</h4>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex gap-4 text-xs text-muted-foreground">
                              <span>{plan.tasksGenerated} tasks</span>
                              <span>{plan.dependencies} dependencies</span>
                              <span>{plan.timeline}</span>
                            </div>
                            <Badge className="bg-ai-primary/20 text-ai-primary text-xs">
                              {plan.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Automated Reporting */}
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-ai-primary" />
                    Automated Post-Event Reporting
                  </CardTitle>
                  <CardDescription>AI-generated comprehensive event analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-ai/5 border border-ai-primary/20">
                      <h4 className="font-medium text-foreground text-sm mb-2">Latest Report: Tech Conference 2023</h4>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Attendance Analysis</span>
                          <span>95% completion</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sentiment Analysis</span>
                          <span>4.7/5 satisfaction</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Feedback Processing</span>
                          <span>342 responses</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-ai hover:opacity-90 text-foreground">
                      <FileBarChart className="h-4 w-4 mr-2" />
                      Generate Current Event Report
                    </Button>
                    <Button variant="outline" className="w-full border-ai-primary/30">
                      View Historical Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <AIAssistant />
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;