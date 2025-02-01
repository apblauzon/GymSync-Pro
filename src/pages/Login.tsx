import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would handle the login logic
    navigate("/dashboard");
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
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" required />
          </div>

          <div className="form-group">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full">
            Sign In
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