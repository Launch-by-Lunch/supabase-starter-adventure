
import { Database, LogIn, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SupabaseGuide = () => {
  const features = [
    {
      icon: LogIn,
      title: "Authentication",
      subtitle: "Add Login & Logout",
      description: "Implement secure user authentication with email/password, social logins, and user management.",
      prompts: [
        "Add a login form with email and password authentication using Supabase",
        "Create a signup page with user registration",
        "Add logout functionality and user session management",
        "Implement protected routes that require authentication"
      ]
    },
    {
      icon: Database,
      title: "Database Storage", 
      subtitle: "Setup Tables & Store Data",
      description: "Create tables, store user data, and implement real-time updates with Supabase's PostgreSQL database.",
      prompts: [
        "Create a 'posts' table to store user blog posts",
        "Add a form to create and save new posts to the database",
        "Display all posts from the database in a list",
        "Add edit and delete functionality for posts"
      ]
    },
    {
      icon: Zap,
      title: "Edge Functions",
      subtitle: "Complex Server Operations", 
      description: "Use serverless functions for sending emails, AI processing, payments, and other backend operations.",
      prompts: [
        "Create an edge function to send welcome emails to new users",
        "Add a contact form that sends emails using an edge function",
        "Implement AI text generation using an edge function",
        "Create a function to process payments with Stripe"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <Database className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Supercharge Your App with Supabase
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your Lovable project into a full-stack application. Add authentication, 
            database storage, and serverless functions with simple prompts.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <p className="text-lg font-medium text-foreground mb-2">
              🚀 Get Started in 3 Steps
            </p>
            <p className="text-muted-foreground">
              Click the green Supabase button → Connect your account → Start building with the prompts below
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Example Prompts */}
                <div>
                  <h4 className="font-medium mb-3 text-foreground">Try these prompts:</h4>
                  <div className="space-y-2">
                    {feature.prompts.map((prompt, promptIndex) => (
                      <div 
                        key={promptIndex}
                        className="p-3 bg-muted/50 rounded-lg text-sm hover:bg-muted/70 transition-colors cursor-pointer group/prompt"
                      >
                        <span className="text-muted-foreground group-hover/prompt:text-foreground transition-colors">
                          "{prompt}"
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupabaseGuide;
