
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Upload, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  attachment?: FileList;
}

export const ContactAdmin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Admin</h2>
          <p className="text-muted-foreground mb-6">
            Need help or have feedback? We're here to assist you.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={errors.email ? "border-destructive" : ""}
              />
              <p className="text-sm text-muted-foreground mt-1">
                We'll use this email to follow up with you
              </p>
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                className={errors.subject ? "border-destructive" : ""}
              />
              {errors.subject && (
                <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters"
                  }
                })}
                className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="attachment">Attachment (Optional)</Label>
              <div className="mt-1">
                <Input
                  id="attachment"
                  type="file"
                  {...register("attachment")}
                  className="cursor-pointer"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Max file size: 5MB. Supported formats: PDF, DOC, DOCX, PNG, JPG
                </p>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Other Ways to Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-blue-600" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-muted-foreground">support@fitnesshub.com</p>
                  <p className="text-sm text-muted-foreground">
                    Response time: Within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-blue-600" />
                <div>
                  <p className="font-medium">Phone Support</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9 AM - 6 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-4 bg-blue-50 border-blue-100">
            <h4 className="font-medium text-blue-900 mb-2">Quick Response Time</h4>
            <p className="text-sm text-blue-700">
              Our support team typically responds within 24 hours. For urgent matters,
              please use phone support during business hours.
            </p>
          </Card>
        </div>
      </div>
    </Card>
  );
};
