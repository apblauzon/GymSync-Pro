
import { ContactAdmin as ContactAdminComponent } from "@/components/dashboard/ContactAdmin";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F7FF] p-4">
      <div className="w-full max-w-[1200px] mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/login")}
          className="mb-6 hover:bg-blue-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Button>
        <ContactAdminComponent />
      </div>
    </div>
  );
};

export default ContactAdmin;
