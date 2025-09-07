import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-50">
      {/* Contact Form Section */}
      <section className="py-16 bg-sand-50">
        <div className="px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold text-blue-900 mb-4">
                Contact Happy Trails
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Have questions or ready to plan your next tropical adventure? Our travel experts are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-coral-50 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Phone</h3>
                    <p className="text-gray-700">1-800-HAPPYTRAILS</p>
                    <p className="text-gray-700">International: +1 234 567 8900</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-coral-50 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Email</h3>
                    <p className="text-gray-700">info@happytrails.com</p>
                    <p className="text-gray-700">support@happytrails.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-coral-50 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Main Office</h3>
                    <p className="text-gray-700">456 Paradise Lane</p>
                    <p className="text-gray-700">Tropica City, Islandia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-coral-50 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Business Hours</h3>
                    <p className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-700">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="text-sm font-medium text-gray-700">
                    Inquiry Type
                  </label>
                  <Select>
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="booking">New Booking</SelectItem>
                      <SelectItem value="existing">Existing Booking</SelectItem>
                      <SelectItem value="custom">Custom Itinerary</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your travel plans or questions..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                    className="w-full bg-blue-900 text-white hover:bg-blue-800 cursor-pointer py-4"
>
        
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-blue-50">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Visit one of our offices around the world
            </p>
          </div>
          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766738.48171446!2d60.9691763862997!3d19.725163578221917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1746880287802!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-blue-900">{office.city}</h3>
                <p className="text-gray-700 mb-2">{office.address}</p>
                <p className="text-gray-700">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-sand-50">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2 text-blue-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const offices = [
  {
    city: "Tropica City",
    address: "456 Paradise Lane, Islandia",
    phone: "+1 234 567 8900",
  },
  {
    city: "Coral Bay",
    address: "78 Coral Street, Oceanland",
    phone: "+44 20 7123 4567",
  },
  {
    city: "Sunny Shores",
    address: "123 Sunset Blvd, Sunland",
    phone: "+65 6123 4567",
  },
];

const faqs = [
  {
    question: "How do I book a trip?",
    answer:
      "Book a trip directly on our website or contact our experts via phone or email for personalized planning.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes! We create custom itineraries tailored to your preferences, budget, and schedule.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 60+ days in advance are fully refunded minus a small administrative fee.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes, comprehensive travel insurance options are available to protect your trip investment.",
  },
];
