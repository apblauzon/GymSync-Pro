
import { ContactAdmin as ContactAdminComponent } from "@/components/dashboard/ContactAdmin";

const ContactAdmin = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] p-4 flex items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <ContactAdminComponent />
      </div>
    </div>
  );
};

export default ContactAdmin;
