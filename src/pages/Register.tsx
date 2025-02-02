import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: "",
    membershipType: "",
    weight: "",
    height: "",
    goal: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  const createClientProfile = async (userId: string) => {
    const { data: session } = await supabase.auth.getSession();
    
    if (!session?.session) {
      throw new Error('No active session');
    }

    const { error } = await supabase.from('clients').insert({
      user_id: userId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      birthday: formData.birthday ? new Date(formData.birthday).toISOString() : null,
      gender: formData.gender,
      membership_type: formData.membershipType,
      join_date: new Date().toISOString(),
      usage_hours: 0,
      last_visit: null,
      smart_watch_rented: false,
      weight: formData.weight ? parseFloat(formData.weight) : null,
      height: formData.height ? parseFloat(formData.height) : null,
    });

    if (error) {
      console.error('Error creating client profile:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // First, sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.name,
          },
        },
      });

      if (authError) {
        toast({
          variant: "destructive",
          title: "Registration failed",
          description: authError.message,
        });
        return;
      }

      if (authData.user) {
        // Sign in immediately after registration
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (signInError) {
          toast({
            variant: "destructive",
            title: "Sign in failed",
            description: signInError.message,
          });
          navigate("/login");
          return;
        }

        // Now create the client profile after successful sign in
        try {
          await createClientProfile(authData.user.id);
          
          toast({
            title: "Registration successful!",
            description: "Welcome to GymSync Pro!",
          });
          
          navigate("/dashboard");
        } catch (profileError) {
          console.error('Error creating profile:', profileError);
          toast({
            variant: "destructive",
            title: "Profile creation failed",
            description: "There was an error creating your profile. Please contact support.",
          });
          navigate("/login");
        }
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join GymSync Pro</h1>
          <p className="text-gray-600">Step {step} of 2</p>
          <div className="progress-bar mt-4">
            <div className="progress-bar-fill" style={{ width: `${(step / 2) * 100}%` }} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <>
              <div className="form-group">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                  minLength={6}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="birthday">Birthday</Label>
                <Input
                  id="birthday"
                  name="birthday"
                  type="date"
                  value={formData.birthday}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button type="button" onClick={nextStep} className="w-full">
                Next Step
              </Button>
            </>
          ) : (
            <>
              <div className="form-group">
                <Label htmlFor="gender">Gender</Label>
                <Select name="gender" onValueChange={(value) => handleSelectChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="form-group">
                <Label htmlFor="membershipType">Membership Type</Label>
                <Select name="membershipType" onValueChange={(value) => handleSelectChange("membershipType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select membership" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="form-group">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  name="height"
                  type="number"
                  value={formData.height}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button type="button" onClick={prevStep} variant="outline" className="w-full">
                  Back
                </Button>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Complete Registration"}
                </Button>
              </div>
            </>
          )}

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
