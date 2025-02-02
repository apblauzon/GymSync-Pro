import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get the tokens from URL
        const token_hash = searchParams.get("token_hash");
        const type = searchParams.get("type");
        
        if (token_hash && type) {
          const { error } = await supabase.auth.verifyOtp({
            token_hash,
            type: type as any,
          });

          if (error) {
            toast({
              variant: "destructive",
              title: "Verification failed",
              description: error.message,
            });
          } else {
            toast({
              title: "Email verified",
              description: "You can now log in to your account.",
            });
            // Redirect to login page after successful verification
            setTimeout(() => navigate("/login"), 2000);
          }
        }
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Verification error",
          description: error.message,
        });
      } finally {
        setVerifying(false);
      }
    };

    verifyEmail();
  }, [searchParams, navigate, toast]);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
          {verifying ? (
            <p className="text-gray-600">Verifying your email...</p>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600">
                If verification was successful, you will be redirected to the login page.
              </p>
              <Button onClick={() => navigate("/login")}>
                Return to Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;