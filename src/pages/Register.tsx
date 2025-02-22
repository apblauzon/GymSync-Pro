import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RegistrationStepOne } from "@/components/auth/RegistrationStepOne";
import { RegistrationStepTwo } from "@/components/auth/RegistrationStepTwo";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FormData } from "@/types/auth";
import { CheckCircle2, Dumbbell } from "lucide-react";
const Register = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: "",
    membershipType: "",
    weight: "",
    height: ""
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
    if (name === 'password') {
      // Calculate password strength
      let strength = 0;
      if (value.length >= 8) strength++;
      if (/[A-Z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^A-Za-z0-9]/.test(value)) strength++;
      setPasswordStrength(strength);
    }
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    const {
      error
    } = await supabase.from('clients').insert({
      user_id: userId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      birthday: formData.birthday ? new Date(formData.birthday).toISOString() : null,
      gender: formData.gender,
      membership_type: formData.membershipType,
      weight: formData.weight ? parseFloat(formData.weight) : null,
      height: formData.height ? parseFloat(formData.height) : null
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
      const {
        data: authData,
        error: authError
      } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.name
          },
          emailRedirectTo: `${window.location.origin}/verify-email`
        }
      });
      if (authError) {
        setError(authError.message);
        return;
      }
      if (authData.user) {
        try {
          await createClientProfile(authData.user.id);
          toast({
            title: "Registration successful! 🎉",
            description: "Please check your email to confirm your account. You will be redirected to the login page.",
            duration: 5000
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } catch (profileError: any) {
          setError(profileError.message || "Error creating profile");
          navigate("/login");
        }
      }
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  const getPasswordStrengthClass = () => {
    switch (passwordStrength) {
      case 1:
        return "password-strength-weak";
      case 2:
        return "password-strength-fair";
      case 3:
        return "password-strength-good";
      case 4:
        return "password-strength-strong";
      default:
        return "";
    }
  };
  return <div className="auth-container">
      <div className="auth-card">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Dumbbell className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join GymSync Pro</h1>
          <p className="text-gray-600 mb-4">
            {step === 1 ? "Basic Information" : "Additional Details"}
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary' : 'bg-gray-200'}`}>
              {step >= 1 && <CheckCircle2 className="w-3 h-3 text-white" />}
            </div>
            <div className="w-16 h-0.5 bg-gray-200">
              <div className={`h-full bg-primary transition-all duration-300 ${step === 2 ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${step === 2 ? 'bg-primary' : 'bg-gray-200'}`}>
              {step === 2 && <CheckCircle2 className="w-3 h-3 text-white" />}
            </div>
          </div>
          <p className="text-sm text-gray-500">Step {step} of 2</p>
        </div>

        {error && <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`step-transition ${step === 1 ? 'step-enter-active' : 'step-exit-active'}`}>
            {step === 1 ? <>
                <RegistrationStepOne formData={formData} handleInputChange={handleInputChange} isLoading={isLoading} />
                {formData.password && <div className="password-strength-meter">
                    <div className={getPasswordStrengthClass()} />
                  </div>}
                <Button type="button" onClick={nextStep} disabled={isLoading} className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 my-[20px]">
                  Next: Additional Details
                </Button>
              </> : <>
                <RegistrationStepTwo formData={formData} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} isLoading={isLoading} />
                <div className="flex gap-4">
                  <Button type="button" onClick={prevStep} variant="outline" className="w-full" disabled={isLoading}>
                    Back to Basic Info
                  </Button>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300" disabled={isLoading}>
                    {isLoading ? "Creating Account..." : "Complete Registration"}
                  </Button>
                </div>
              </>}
          </div>

          <div className="space-y-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-primary hover:underline font-medium">
                Login here
              </a>
            </p>
            <p className="text-xs text-gray-500">
              By registering, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
      </div>
    </div>;
};
export default Register;