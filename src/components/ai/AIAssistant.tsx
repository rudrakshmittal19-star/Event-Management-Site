import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Send, Minimize2, Maximize2, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  actions?: { label: string; action: () => void }[];
}

export function AIAssistant() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. I can help you optimize task allocation, predict delays, and suggest resource improvements. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
      actions: [
        { label: "Optimize Tasks", action: () => console.log("Optimizing tasks") },
        { label: "Check Delays", action: () => console.log("Checking delays") },
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand you need help with that. Let me analyze your current event data and provide recommendations.",
        isUser: false,
        timestamp: new Date(),
        actions: [
          { label: "View Suggestions", action: () => console.log("Viewing suggestions") },
          { label: "Apply Changes", action: () => console.log("Applying changes") },
        ]
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
      isExpanded ? "w-96 h-96" : "w-16 h-16"
    }`}>
      {!isExpanded ? (
        <Button
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 rounded-full bg-gradient-ai hover:opacity-90 shadow-ai animate-ai-pulse"
        >
          <Brain className="h-6 w-6 text-foreground" />
        </Button>
      ) : (
        <Card className="w-full h-full bg-gradient-card border-ai-primary/30 shadow-ai">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded bg-gradient-ai">
                  <Brain className="h-4 w-4 text-foreground" />
                </div>
                <CardTitle className="text-sm text-ai-primary">
                  AI Assistant
                </CardTitle>
                <Sparkles className="h-3 w-3 text-ai-primary animate-pulse" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="h-6 w-6 p-0"
              >
                <Minimize2 className="h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-4 pt-0">
            <ScrollArea className="flex-1 mb-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-gradient-ai/10 border border-ai-primary/20 text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.actions && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {message.actions.map((action, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={action.action}
                              className="text-xs border-ai-primary/30 hover:bg-ai-primary/10"
                            >
                              {action.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 bg-input border-border focus:ring-ai-primary"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-gradient-ai hover:opacity-90 text-foreground"
              >
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}