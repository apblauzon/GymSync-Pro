import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "@/types/auth";

interface StepOneProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

export const RegistrationStepOne = ({
  formData,
  handleInputChange,
  isLoading,
}: StepOneProps) => {
  return (
    <>
      <div className="form-group">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          disabled={isLoading}
          placeholder="John Doe"
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
          disabled={isLoading}
          placeholder="john@example.com"
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
          disabled={isLoading}
          minLength={6}
          placeholder="••••••••"
        />
        <p className="text-sm text-muted-foreground mt-1">
          Password must be at least 6 characters long and contain a mix of letters and numbers
        </p>
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
          disabled={isLoading}
          placeholder="+1 (555) 000-0000"
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
          disabled={isLoading}
        />
      </div>
    </>
  );
};