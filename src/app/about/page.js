import Image from "next/image";
import Link from "next/link";
import { Award, Users, Globe, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/travel-team-bg.avif"
            alt="Happy Trails travel team"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-10 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            About Happy Trails
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl drop-shadow-lg">
            Crafting unforgettable tropical travel experiences tailored just for you.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-sand-50">
        <div className="px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-blue-700 mb-4">
                Our Journey
              </h2>
              <div className="space-y-4 text-black/80">
                <p>
                  Happy Trails started with a passion for exploring the world's
                  most serene beaches and vibrant tropical destinations.
                </p>
                <p>
                  From humble beginnings, our team has grown into a trusted
                  travel partner for adventurers seeking curated tropical
                  experiences.
                </p>
                <p>
                  Our mission is simple: personalized, joyful, and memorable
                  journeys that bring paradise closer to every traveler.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="text-4xl font-bold text-coral-500">18+</p>
                  <p className="text-black/80">Years of Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="text-4xl font-bold text-coral-500">120+</p>
                  <p className="text-black/80">Destinations</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="text-4xl font-bold text-coral-500">60k+</p>
                  <p className="text-black/80">Happy Travelers</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="text-4xl font-bold text-coral-500">14</p>
                  <p className="text-black/80">Global Offices</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/travel-team-action.webp"
                alt="Happy Trails team in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-blue-700 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              The principles that guide every journey we plan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-coral-100 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-coral-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-700">{value.title}</h3>
                <p className="text-black/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-sand-50">
        <div className="px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-blue-700 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Dedicated travel experts passionate about crafting your perfect getaway
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
                <p className="text-coral-500 mb-2">{member.role}</p>
                <p className="text-black/80 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900">
        <div className="px-4 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Ready to Start Your Tropical Adventure?
            </h2>
            <p className="text-xl text-white/95 mb-8">
              Let Happy Trails craft your perfect itinerary to paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-coral-500 text-coral-500 hover:bg-coral-50 cursor-pointer"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/destinations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-coral-500 text-coral-500 hover:bg-coral-50 cursor-pointer"
                >
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample Data
const values = [
  {
    title: "Adventure",
    description:
      "Every journey is designed to immerse you in thrilling tropical experiences.",
    icon: Award,
  },
  {
    title: "Customer Happiness",
    description:
      "We prioritize your satisfaction and tailor every trip to your dream vacation.",
    icon: Users,
  },
  {
    title: "Sustainability",
    description:
      "Protecting nature and supporting local communities is at the heart of our travel philosophy.",
    icon: Globe,
  },
  {
    title: "Innovation",
    description:
      "Creative itineraries and unique experiences make every trip unforgettable.",
    icon: Clock,
  },
];

const team = [
  {
    name: "Aisha Malik",
    role: "Founder & CEO",
    photo: "/user1.jpg",
    bio: "With 15 years in travel, Aisha created Happy Trails to share her passion for tropical journeys.",
  },
  {
    name: "Ravi Kumar",
    role: "Head of Operations",
    photo: "/user4.avif",
    bio: "Ravi ensures seamless logistics for every adventure, making travel stress-free for all.",
  },
  {
    name: "Sofia Lopez",
    role: "Destination Expert - Caribbean",
    photo: "/user3.jpg",
    bio: "Sofia crafts authentic Caribbean experiences with local insight and insider tips.",
  },
  {
    name: "Kwame Mensah",
    role: "Destination Expert - Africa",
    photo: "/user2.jpg",
    bio: "Kwame specializes in safari adventures and unique African travel experiences.",
  },
];
