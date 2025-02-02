import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RegistrationStepOne } from "@/components/auth/RegistrationStepOne";
import { RegistrationStepTwo } from "@/components/auth/RegistrationStepTwo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FormData } from "@/types/auth";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: "",
    membershipType: "",
    weight: "",
    height: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateForm = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.birthday) {
        setError("Please fill in all required fields");
        return false;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long");
        return false;
      }
    } else {
      if (!formData.gender || !formData.membershipType || !formData.weight || !formData.height) {
        setError("Please fill in all required fields");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateForm()) {
      setStep(2);
      setError(null);
    }
  };

  const prevStep = () => {
    setStep(1);
    setError(null);
  };

  const createClientProfile = async (userId: string) => {
    const { error } = await supabase.from('clients').insert({
      user_id: userId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      birthday: formData.birthday ? new Date(formData.birthday).toISOString() : null,
      gender: formData.gender,
      membership_type: formData.membershipType,
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
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError(null);

    try {
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
        setError(authError.message);
        return;
      }

      if (authData.user) {
        try {
          await createClientProfile(authData.user.id);
          
          toast({
            title: "Registration successful!",
            description: "Please check your email to confirm your account before logging in.",
          });
          
          navigate("/login");
        } catch (profileError: any) {
          setError(profileError.message || "Error creating profile");
          // Still navigate to login since the auth account was created
          navigate("/login");
        }
      }
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred");
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

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <>
              <RegistrationStepOne
                formData={formData}
                handleInputChange={handleInputChange}
                isLoading={isLoading}
              />
              <Button
                type="button"
                onClick={nextStep}
                className="w-full"
                disabled={isLoading}
              >
                Next Step
              </Button>
            </>
          ) : (
            <>
              <RegistrationStepTwo
                formData={formData}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
                isLoading={isLoading}
              />
              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="w-full"
                  disabled={isLoading}
                >
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