import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Check if user is already authenticated
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/dashboard");
      }
    };
    
    checkSession();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        let errorMessage = "Invalid email or password";
        
        // Handle specific error cases
        if (error.message.includes('Email not confirmed')) {
          errorMessage = "Please check your email and confirm your account before logging in. If you need a new confirmation email, please register again.";
        } else if (error.message.includes('Invalid login credentials')) {
          errorMessage = "The email or password you entered is incorrect. Please try again.";
        }
        
        toast({
          variant: "destructive",
          title: "Login failed",
          description: errorMessage,
          duration: 5000,
        });
        return;
      }

      if (data.session) {
        toast({
          title: "Login successful",
          description: "Welcome back!",
          duration: 3000,
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your GymSync Pro account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="mt-1"
            />
          </div>

          <div className="form-group">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="space-y-4 text-center">
            <p className="text-sm text-gray-600">
              New to GymSync Pro?{" "}
              <a href="/register" className="text-primary hover:underline">
                Register here
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Need help?{" "}
              <a href="#" className="text-primary hover:underline">
                Contact Admin
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;