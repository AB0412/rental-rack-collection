
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thanks for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-16 bg-rental-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rental-dark mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to place an order? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="(123) 456-7890" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your event and what items you need..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-rental-DEFAULT hover:bg-rental-dark">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-rental-dark">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-rental-DEFAULT" />
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-rental-DEFAULT" />
                <p className="text-gray-600">info@rentalrack.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
