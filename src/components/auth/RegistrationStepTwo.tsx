import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormData } from "@/types/auth";

interface StepTwoProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  isLoading: boolean;
}

export const RegistrationStepTwo = ({
  formData,
  handleInputChange,
  handleSelectChange,
  isLoading,
}: StepTwoProps) => {
  return (
    <>
      <div className="form-group">
        <Label htmlFor="gender">Gender</Label>
        <Select 
          name="gender" 
          onValueChange={(value) => handleSelectChange("gender", value)}
          disabled={isLoading}
          required
        >
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
        <Select 
          name="membershipType" 
          onValueChange={(value) => handleSelectChange("membershipType", value)}
          disabled={isLoading}
          required
        >
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
          disabled={isLoading}
          min="1"
          max="500"
          placeholder="70"
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
          disabled={isLoading}
          min="1"
          max="300"
          placeholder="170"
        />
      </div>
    </>
  );
};