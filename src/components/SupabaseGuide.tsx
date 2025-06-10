
import { Database, LogIn, Function } from "lucide-react";
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
      ],
      codeExample: `// Example: Login component
const handleLogin = async (email, password) => {
  const { data, error } = await supabase.auth
    .signInWithPassword({ email, password })
}`
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
      ],
      codeExample: `// Example: Saving data
const { data, error } = await supabase
  .from('posts')
  .insert([{ title, content, user_id }])`
    },
    {
      icon: Function,
      title: "Edge Functions",
      subtitle: "Complex Server Operations", 
      description: "Use serverless functions for sending emails, AI processing, payments, and other backend operations.",
      prompts: [
        "Create an edge function to send welcome emails to new users",
        "Add a contact form that sends emails using an edge function",
        "Implement AI text generation using an edge function",
        "Create a function to process payments with Stripe"
      ],
      codeExample: `// Example: Edge function call
const { data } = await supabase.functions
  .invoke('send-email', {
    body: { to: email, subject, message }
  })`
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

                {/* Code Example */}
                <div>
                  <h4 className="font-medium mb-2 text-foreground">Example code:</h4>
                  <div className="bg-muted/30 rounded-md p-3 font-mono text-xs text-muted-foreground overflow-x-auto">
                    <pre>{feature.codeExample}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Connect your Supabase account to unlock these powerful features and start building your full-stack app today.
            </p>
            <Button size="lg" className="group">
              Connect Supabase
              <Database className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Look for the green Supabase button in the top right corner
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              ⚡
            </div>
            <h4 className="font-medium mb-2">Instant Setup</h4>
            <p className="text-sm text-muted-foreground">No complex configuration. Connect and start building immediately.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              🔒
            </div>
            <h4 className="font-medium mb-2">Production Ready</h4>
            <p className="text-sm text-muted-foreground">Enterprise-grade security and scalability built-in.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              🚀
            </div>
            <h4 className="font-medium mb-2">AI-Powered</h4>
            <p className="text-sm text-muted-foreground">Let Lovable's AI handle the implementation details for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupabaseGuide;
